package resolver

import (
	"log"

	"discover_ecommerce.yukiya.net/internal/infrastructure/postgres"
	"discover_ecommerce.yukiya.net/internal/usecase"
	"gorm.io/gorm"
)

// This file will not be regenerated automatically.
//
// It serves as dependency injection for your app, add any dependencies you require here.

type Resolver struct {
	DB     *gorm.DB
	Logger *log.Logger
}

func (r Resolver) Usecase() usecase.Usecase {
	return usecase.NewUseCase(
		r.Logger,
		postgres.NewClient(r.Logger, r.DB),
	)
}
