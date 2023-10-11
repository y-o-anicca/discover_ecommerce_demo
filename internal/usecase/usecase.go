package usecase

import (
	"context"
	"log"

	"discover_ecommerce.yukiya.net/internal/domain/model"
	"discover_ecommerce.yukiya.net/internal/domain/repository"
)

type (
	Usecase interface {
		// Brands
		GetBrands(ctx context.Context, input model.BrandsInput) ([]*model.Brand, error)
		GetBrandsByQuery(ctx context.Context, input model.BrandsByQueryInput) ([]*model.Brand, error)
	}

	usecase struct {
		logger     *log.Logger
		repository repository.Repository
	}
)

func NewUseCase(
	logger *log.Logger, repository repository.Repository,
) Usecase {
	return &usecase{
		logger:     logger,
		repository: repository,
	}
}
