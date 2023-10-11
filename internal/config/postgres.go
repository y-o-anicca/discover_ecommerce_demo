package config

import (
	"fmt"
	"os"
)

var Postgres postgres

type postgres struct{}

func (postgres) UserName() string {
	return os.Getenv("POSTGRES_USERNAME")
}

func (postgres) Password() string {
	return os.Getenv("POSTGRES_PASSWORD")
}

func (postgres) Database() string {
	return os.Getenv("POSTGRES_DATABASE")
}

func (postgres) DatabaseHost() string {
	return os.Getenv("DB_HOST")
}

func PostgresDSN() string {
	return fmt.Sprintf(
		"postgres://%s:%s@%s/%s?sslmode=disable",
		Postgres.UserName(),
		Postgres.Password(),
		Postgres.DatabaseHost(),
		Postgres.Database(),
	)
}
