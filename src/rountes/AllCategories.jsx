// import React from 'react'
import { ProductListLayout } from "../components/layouts/ProductListLayout";
import { FetchAllData } from "../utils/FetchAllData";

const AllCategories = () => {
  return (
    <ProductListLayout>
      <div className="pagebody">
      <div className="catheading"><h1><span>Popular </span> Categories</h1></div>
        <FetchAllData />
      </div>
    </ProductListLayout>
  )
}

export default AllCategories;