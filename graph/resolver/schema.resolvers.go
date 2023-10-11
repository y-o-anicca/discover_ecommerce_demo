package resolver

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.
// Code generated by github.com/99designs/gqlgen version v0.17.39

import (
	"context"

	graph1 "discover_ecommerce.yukiya.net/graph"
	"discover_ecommerce.yukiya.net/internal/domain/model"
)

// Brands is the resolver for the brands field.
func (r *queryResolver) Brands(ctx context.Context, input model.BrandsInput) ([]*model.Brand, error) {
	brands, err := r.Usecase().GetBrands(ctx, input)
	if err != nil {
		return nil, err
	}
	return brands, nil
}

// BrandsByQuery is the resolver for the BrandsByQuery field.
func (r *queryResolver) BrandsByQuery(ctx context.Context, input model.BrandsByQueryInput) ([]*model.Brand, error) {
	brands, err := r.Usecase().GetBrandsByQuery(ctx, input)
	if err != nil {
		return nil, err
	}
	return brands, nil
}

// Query returns graph1.QueryResolver implementation.
func (r *Resolver) Query() graph1.QueryResolver { return &queryResolver{r} }

type queryResolver struct{ *Resolver }

// !!! WARNING !!!
// The code below was going to be deleted when updating resolvers. It has been copied here so you have
// one last chance to move it out of harms way if you want. There are two reasons this happens:
//   - When renaming or deleting a resolver the old code will be put in here. You can safely delete
//     it when you're done.
//   - You have helper methods in this file. Move them out to keep these resolver files clean.
type brandResolver struct{ *Resolver }
