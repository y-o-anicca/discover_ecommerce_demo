import React from "react";
import TopBrands from "./TopBrands";
import Search from "./Search";
import { CategoryKey, LocationKey } from "../../api";

const index = () => {
  return (
    <div
      className="bg-white flex-1 overflow-y-scroll flex flex-col"
      style={{ height: "calc(100vh - 59px)" }}
    >
      <TopBrands
        title="Top food brands in Miami"
        category={CategoryKey.Food}
        location={LocationKey.Miami}
      />
      <TopBrands
        title="Top toy brands in New York"
        category={CategoryKey.Toys}
        location={LocationKey.Newyork}
      />
      <TopBrands
        title="Top coffee brands in Los Angeles"
        category={CategoryKey.Coffee}
        location={LocationKey.Losangeles}
      />
      <Search />
    </div>
  );
};

export default index;
