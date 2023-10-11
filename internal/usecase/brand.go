package usecase

import (
	"context"
	"fmt"
	"regexp"

	"discover_ecommerce.yukiya.net/internal/domain/model"
)

func (u *usecase) GetBrands(ctx context.Context, input model.BrandsInput) ([]*model.Brand, error) {
	brands, err := u.repository.GetBrands(ctx, input)
	if err != nil {
		return nil, err
	}
	return brands, nil
}

// "top toys in Los Angeles"
func (u *usecase) GetBrandsByQuery(ctx context.Context, input model.BrandsByQueryInput) ([]*model.Brand, error) {
	var brandsInput = model.BrandsInput{}

	searchText := input.Query

	categoryPattern := regexp.MustCompile(`coffee|food|toys|appliances|furniture`)
	locationPattern := regexp.MustCompile(`Los Angeles|New York|Seattle|Dallas|Miami`)
	categoryMatch := categoryPattern.FindString(searchText)
	locationMatch := locationPattern.FindString(searchText)

	if categoryMatch != "" {
		categoryKey := model.CategoryMap[categoryMatch]
		brandsInput.Category = &categoryKey
	}
	if locationMatch != "" {
		locationKey := model.LocationMap[locationMatch]
		brandsInput.Location = &locationKey

		fmt.Println(locationMatch)
		fmt.Println(&locationKey)
	}

	brands, err := u.repository.GetBrands(ctx, brandsInput)
	if err != nil {
		return nil, err
	}
	return brands, nil
}
