import React, { useState } from "react";
import { useGetBrandsByQueryQuery } from "../../api";

const Index = () => {
  const [memoQuery, setMemoQuery] = useState("");
  const [query, setQuery] = useState("");
  const [{ data: { brandsByQuery = [] } = {} }] = useGetBrandsByQueryQuery({
    variables: {
      input: {
        query,
      },
    },
  });

  return (
    <div className="w-full mx-auto max-w-2xl px-4 py-6 lg:max-w-7xl lg:px-8">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">
        New Search
      </h2>
      <div className="mt-2 flex items-center pt-2 relative w-80 text-gray-600">
        <input
          className="w-96 border-2 border-gray-300 bg-white h-10 px-2 rounded-lg text-sm focus:outline-none"
          type="search"
          name="search"
          value={memoQuery}
          onChange={(e) => {
            setMemoQuery(e.target.value);
          }}
          onBlur={(e) => {
            setQuery(memoQuery);
          }}
          placeholder="Create new query that works"
        />
        <button
          type="submit"
          className="ml-2"
          onClick={(e) => {
            setQuery(memoQuery);
          }}
        >
          <svg
            className="text-gray-600 h-4 w-4 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
            id="Capa_1"
            x="0px"
            y="0px"
            viewBox="0 0 56.966 56.966"
            // style={{ enableBackground: "new 0 0 56.966 56.966" }}
            xmlSpace="preserve"
            width="512px"
            height="512px"
          >
            <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
          </svg>
        </button>
      </div>

      <div className="group-open:animate-fadeIn mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {brandsByQuery.map((brand) => (
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
    </div>
  );
};

export default Index;
