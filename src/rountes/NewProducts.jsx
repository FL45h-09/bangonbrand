// import React from 'react'

import { ProductListLayout } from "../components/layouts/ProductListLayout";
import { FetchAllData } from "../utils/FetchAllData";

const NewProducts = () => {
  return (
    <ProductListLayout>
      <div className="pagebody">
        <FetchAllData />
      </div>
    </ProductListLayout>
  )
}

export default NewProducts;