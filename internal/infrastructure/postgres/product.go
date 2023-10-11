package postgres

import (
	"strconv"
	"time"

	"discover_ecommerce.yukiya.net/internal/domain/model"
)

type Product struct {
	ID        int       `gorm:"column:id"`
	BrandID   int       `gorm:"column:brand_id"`
	Name      string    `gorm:"column:name"`
	CreatedAt time.Time `gorm:"column:created_at"`
}

type Products []*Product

func (ps Products) toEntity() []*model.Product {
	var entities []*model.Product
	for _, p := range ps {
		entities = append(entities, &model.Product{
			ID:   strconv.Itoa(p.ID),
			Name: p.Name,
		})
	}
	return entities
}
