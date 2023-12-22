// import React from 'react'
import { ProductListLayout } from "../components/layouts/ProductListLayout";
import { FetchAllData } from "../utils/FetchAllData";

const Products = () => {
  return (
    <ProductListLayout>
      <div className="pagebody">
        <h1>All Products</h1>
        <FetchAllData />
      </div>
    </ProductListLayout>
  )
}

export default Products;