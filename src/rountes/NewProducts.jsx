// import React from 'react'

import { ProductListLayout } from "../components/layouts/ProductListLayout";
import { FetchData } from "../utils/FetchData";

const NewProducts = () => {
  return (
    <ProductListLayout>
      <div className="pagebody">
        <FetchData />
      </div>
    </ProductListLayout>
  )
}

export default NewProducts;