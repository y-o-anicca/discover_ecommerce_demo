import React from "react";
import { CategoryKey, LocationKey, useGetBrandsQuery } from "../../api";

interface Props {
  title: string;
  category: CategoryKey;
  location: LocationKey;
}

const Index = ({ title, category, location }: Props) => {
  const [{ data: { brands = [] } = {} }] = useGetBrandsQuery({
    variables: {
      input: {
        category: category,
        location: location,
      },
    },
  });

  return (
    <div className="w-full mx-auto max-w-2xl px-4 py-6 lg:max-w-7xl lg:px-8">
      <details className="group" open>
        <summary className="flex items-center font-medium cursor-pointer list-none">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            {title}
          </h2>
          <span className="ml-3 transition group-open:rotate-180">
            <svg
              fill="none"
              height={24}
              shapeRendering="geometricPrecision"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              width={24}
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </span>
        </summary>
        <div className="group-open:animate-fadeIn mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="flex flex-col w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 lg:h-80"
            >
              <h5 className="mb-4 text-xl font-semibold">{brand.name}</h5>
              <div className="flex items-baseline text-gray-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="60"
                  height="60"
                  viewBox="0 0 50 50"
                >
                  <path
                    fill="none"
                    fillRule="evenodd"
                    stroke="#000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    strokeWidth="2"
                    d="M25,3C12.856,3,3.011,12.85,3.011,25c0,11.156,8.299,20.37,19.057,21.805v-4.433c0-1.25-0.788-2.373-1.972-2.771	c-6.207-2.086-10.648-8.022-10.484-14.972C9.811,16.168,16.7,9.515,25.159,9.601C33.587,9.686,40.392,16.548,40.392,25	c0,0.792-0.061,1.584-0.181,2.366c-1.885,12.42-18.053,19.401-18.142,19.439C23.029,46.933,24.007,47,25,47	c12.144,0,21.989-9.85,21.989-22S37.144,3,25,3"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <div className="mt-6 mb-4 flex flex-col">
                <span className="text-base font-normal font-semibold flex">
                  Product(s):
                </span>
                {brand.products.map((product) => (
                  <span
                    key={product.id}
                    className="mt-2 text-base font-normal leading-tight text-gray-500"
                  >
                    {product.name}
                  </span>
                ))}
              </div>
              <button
                type="button"
                className="mt-auto text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
              >
                View
              </button>
            </div>
          ))}
        </div>
      </details>
    </div>
  );
};

export default Index;
