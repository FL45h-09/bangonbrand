// import React from 'react'
import { ProductListLayout } from "../components/layouts/ProductListLayout";
import { FetchData } from "../utils/FetchData";

const PopularCategories = () => {
  return (
    <ProductListLayout>
      <div className="pagebody">
        <h1>Popular Categories</h1>
        <FetchData />
      </div>
    </ProductListLayout>
  )
}

export default PopularCategories;