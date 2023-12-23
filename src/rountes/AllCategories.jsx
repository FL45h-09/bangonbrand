// import React from 'react'
import { ProductListLayout } from "../components/layouts/ProductListLayout";
import { FetchAllData } from "../utils/FetchAllData";

const AllCategories = () => {
  return (
    <ProductListLayout>
      <div className="pagebody">
        <h1>Popular Categories</h1>
        <FetchAllData />
      </div>
    </ProductListLayout>
  )
}

export default AllCategories;