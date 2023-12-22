// import React from 'react'
import { ProductListLayout } from "../components/layouts/ProductListLayout";
import { FetchAllData } from "../utils/FetchAllData";

const GetItFast = () => {
  return (
    <ProductListLayout>
      <div className="pagebody">
      <h1>Get It Fast</h1>
        <FetchAllData />
      </div>
    </ProductListLayout>
  )
}

export default GetItFast;