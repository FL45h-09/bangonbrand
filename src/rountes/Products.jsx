// import React from 'react'
import { ProductListLayout } from "../components/layouts/ProductListLayout";
import { FetchAllData } from "../utils/FetchAllData";

const Products = () => {
  return (
    <ProductListLayout>
      <div className="pagebody">
      <div className="catheading"><h1><span>All </span> Products</h1></div>
        <FetchAllData />
      </div>
    </ProductListLayout>
  )
}

export default Products;