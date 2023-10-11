package postgres

import (
	"context"
	"strconv"
	"time"

	"discover_ecommerce.yukiya.net/internal/domain/model"
	"github.com/pkg/errors"
)

type (
	Brand struct {
		ID        int      `gorm:"column:id"`
		Category  Category `gorm:"column:category"`
		Location  Location `gorm:"column:location"`
		Name      string   `gorm:"column:name"`
		Products  Products
		CreatedAt time.Time `gorm:"column: created_at"`
	}

	Brands []*Brand

	Category string
	Location string
)

func (bs Brands) toEntity() []*model.Brand {
	var entities []*model.Brand
	for _, b := range bs {
		entities = append(entities, &model.Brand{
			ID:       strconv.Itoa(b.ID),
			Name:     b.Name,
			Category: string(b.Category),
			Location: string(b.Location),
			Products: b.Products.toEntity(),
		})
	}
	return entities
}

const (
	CategoryCoffee     Category = "coffee"
	CategoryFood                = "food"
	CategoryToys                = "toys"
	CategoryAppliances          = "appliances"
	CategoryFurniture           = "furniture"
)

func categoryKey(c model.CategoryKey) Category {
	switch c {
	case model.CategoryKeyCoffee:
		return CategoryCoffee
	case model.CategoryKeyFood:
		return CategoryFood
	case model.CategoryKeyToys:
		return CategoryToys
	case model.CategoryKeyAppliances:
		return CategoryAppliances
	case model.CategoryKeyFurniture:
		return CategoryFurniture
	}
	return ""
}

const (
	LocationLosAngeles Location = "Los Angeles"
	LocationNewYork             = "New York"
	LocationSeattle             = "Seattle"
	LocationDallas              = "Dallas"
	LocationMiami               = "Miami"
)

func locationKey(c model.LocationKey) Location {
	switch c {
	case model.LocationKeyLosangeles:
		return LocationLosAngeles
	case model.LocationKeyNewyork:
		return LocationNewYork
	case model.LocationKeySeattle:
		return LocationSeattle
	case model.LocationKeyDallas:
		return LocationDallas
	case model.LocationKeyMiami:
		return LocationMiami
	}
	return ""
}

func (c client) GetBrands(ctx context.Context, input model.BrandsInput) ([]*model.Brand, error) {

	var brandsDTO Brands
	query := c.db.
		Preload("Products")

	if input.Category != nil {
		query = query.Where("category = ?", string(categoryKey(*input.Category)))
	}

	if input.Location != nil {
		query = query.Where("location = ?", string(locationKey(*input.Location)))
	}

	if err := query.Find(&brandsDTO).Error; err != nil {
		return nil, errors.Wrap(err, "error in postgres.GetBrands#preloadBrandProducts")
	}

	return brandsDTO.toEntity(), nil
}
