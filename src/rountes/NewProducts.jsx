// import React from 'react'

import { ProductListLayout } from "../components/layouts/ProductListLayout";
import { FetchAllData } from "../utils/FetchAllData";

const NewProducts = () => {
  return (
    <ProductListLayout>
      <div className="pagebody">
      <div className="catheading"><h1><span>New</span> Products</h1></div>
        <FetchAllData />
      </div>
    </ProductListLayout>
  )
}

export default NewProducts;