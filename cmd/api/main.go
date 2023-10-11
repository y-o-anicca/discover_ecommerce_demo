package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
	"time"

	generated "discover_ecommerce.yukiya.net/graph"
	"discover_ecommerce.yukiya.net/graph/resolver"
	"discover_ecommerce.yukiya.net/internal/config"
	graphqlHandler "github.com/99designs/gqlgen/graphql/handler"
	"github.com/99designs/gqlgen/graphql/playground"
	"github.com/go-chi/chi"
	"github.com/go-chi/chi/middleware"
	"github.com/go-chi/cors"
	"github.com/joho/godotenv"
	_ "github.com/lib/pq"
	postgresDriver "gorm.io/driver/postgres"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"
)

const version = "1.0.0"

func main() {

	err := godotenv.Load(".env.default")
	if err != nil {
		panic("Error loading .env file")
	}

	if !config.IsRequiredEnvironments() {
		return
	}

	logger := log.New(os.Stdout, "", log.Ldate|log.Ltime)

	db, err := openDB()
	if err != nil {
		logger.Fatal(err)
	}
	defer func() {
		conn, err := db.DB()
		if err != nil {
			_, _ = fmt.Fprintln(os.Stderr, fmt.Errorf("error in close DB: %w", err))
			return
		}
		if err := conn.Close(); err != nil {
			_, _ = fmt.Fprintln(os.Stderr, fmt.Errorf("error in close DB: %w", err))
			return
		}
	}()

	logger.Print("database connection pool established")

	r := initHandler(db, logger)

	srv := &http.Server{
		Addr:         fmt.Sprintf(":%s", config.Port()),
		Handler:      r,
		IdleTimeout:  time.Minute,
		ReadTimeout:  10 * time.Second,
		WriteTimeout: 30 * time.Second,
	}

	logger.Printf("starting %s server on %s", config.GetAppEnv(), srv.Addr)
	err = srv.ListenAndServe()
	logger.Fatal(err)

}

func openDB() (*gorm.DB, error) {
	newLogger := logger.New(
		log.New(os.Stdout, "\r\n", log.LstdFlags), // io writer
		logger.Config{
			SlowThreshold:             time.Second, // Slow SQL threshold
			LogLevel:                  logger.Info, // Log level
			IgnoreRecordNotFoundError: true,        // Ignore ErrRecordNotFound error for logger
			ParameterizedQueries:      true,        // Don't include params in the SQL log
			Colorful:                  false,       // Disable color
		},
	)

	db, err := gorm.Open(postgresDriver.Open(config.PostgresDSN()), &gorm.Config{
		Logger: newLogger,
	})
	if err != nil {
		return nil, err
	}
	return db, nil
}

func initHandler(db *gorm.DB, log *log.Logger) *chi.Mux {

	r := chi.NewRouter()
	r.Use(middleware.Logger)
	r.Use(middleware.Recoverer)
	r.Use(cors.Handler(cors.Options{
		AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowedHeaders:   []string{"Accept", "Authorization", "Content-Type", "X-CSRF-Token"},
		ExposedHeaders:   []string{"Link"},
		AllowCredentials: true,
		MaxAge:           300, // Maximum value not ignored by any of major browsers
	}))

	r.Get("/health", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("OK"))
	})

	r.Post("/query", graphqlHandler.NewDefaultServer(generated.NewExecutableSchema(generated.Config{Resolvers: &resolver.Resolver{
		DB:     db,
		Logger: log,
	}})).ServeHTTP)

	r.Get("/playground", playground.Handler("GraphQL playground", "/query"))
	return r
}
