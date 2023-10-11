package repository

import (
	"context"

	"discover_ecommerce.yukiya.net/internal/domain/model"
)

type Repository interface {
	GetBrands(ctx context.Context, input model.BrandsInput) ([]*model.Brand, error)
}
