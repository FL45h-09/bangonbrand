// import React from 'react'
import { ProductListLayout } from "../components/layouts/ProductListLayout";
import { FetchData } from "../utils/FetchData";

const Products = () => {
  return (
    <ProductListLayout>
      <div className="pagebody">
        <h1>All Products</h1>
        <FetchData />
      </div>
    </ProductListLayout>
  )
}

export default Products;