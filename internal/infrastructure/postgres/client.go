package postgres

import (
	"log"

	"discover_ecommerce.yukiya.net/internal/domain/repository"
	"gorm.io/gorm"
)

type client struct {
	logger *log.Logger
	db     *gorm.DB
}

func NewClient(
	logger *log.Logger, db *gorm.DB,
) repository.Repository {
	return &client{
		logger: logger,
		db:     db,
	}
}
