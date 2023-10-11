import gql from "graphql-tag";
import * as Urql from "urql";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type Brand = {
  __typename?: "Brand";
  category: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  location: Scalars["String"]["output"];
  name: Scalars["String"]["output"];
  products: Array<Product>;
};

export type BrandsByQueryInput = {
  query: Scalars["String"]["input"];
};

export type BrandsInput = {
  category?: InputMaybe<CategoryKey>;
  location?: InputMaybe<LocationKey>;
};

export enum CategoryKey {
  Appliances = "APPLIANCES",
  Coffee = "COFFEE",
  Food = "FOOD",
  Furniture = "FURNITURE",
  Toys = "TOYS",
}

export enum LocationKey {
  Dallas = "DALLAS",
  Losangeles = "LOSANGELES",
  Miami = "MIAMI",
  Newyork = "NEWYORK",
  Seattle = "SEATTLE",
}

export type Product = {
  __typename?: "Product";
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
};

export type Query = {
  __typename?: "Query";
  brands: Array<Brand>;
  brandsByQuery: Array<Brand>;
};

export type QueryBrandsArgs = {
  input: BrandsInput;
};

export type QueryBrandsByQueryArgs = {
  input: BrandsByQueryInput;
};

export type GetBrandsQueryVariables = Exact<{
  input: BrandsInput;
}>;

export type GetBrandsQuery = {
  __typename?: "Query";
  brands: Array<{
    __typename?: "Brand";
    id: string;
    name: string;
    category: string;
    location: string;
    products: Array<{ __typename?: "Product"; id: string; name: string }>;
  }>;
};

export type GetBrandsByQueryQueryVariables = Exact<{
  input: BrandsByQueryInput;
}>;

export type GetBrandsByQueryQuery = {
  __typename?: "Query";
  brandsByQuery: Array<{
    __typename?: "Brand";
    id: string;
    name: string;
    category: string;
    location: string;
    products: Array<{ __typename?: "Product"; id: string; name: string }>;
  }>;
};

export const GetBrandsDocument = gql`
  query GetBrands($input: BrandsInput!) {
    brands(input: $input) {
      id
      name
      products {
        id
        name
      }
      category
      location
    }
  }
`;

export function useGetBrandsQuery(
  options: Omit<Urql.UseQueryArgs<GetBrandsQueryVariables>, "query">,
) {
  return Urql.useQuery<GetBrandsQuery, GetBrandsQueryVariables>({
    query: GetBrandsDocument,
    ...options,
  });
}
export const GetBrandsByQueryDocument = gql`
  query GetBrandsByQuery($input: BrandsByQueryInput!) {
    brandsByQuery(input: $input) {
      id
      name
      products {
        id
        name
      }
      category
      location
    }
  }
`;

export function useGetBrandsByQueryQuery(
  options: Omit<Urql.UseQueryArgs<GetBrandsByQueryQueryVariables>, "query">,
) {
  return Urql.useQuery<GetBrandsByQueryQuery, GetBrandsByQueryQueryVariables>({
    query: GetBrandsByQueryDocument,
    ...options,
  });
}
