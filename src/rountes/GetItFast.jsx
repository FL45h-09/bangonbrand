// import React from 'react'
import { ProductListLayout } from "../components/layouts/ProductListLayout";
import { FetchData } from "../utils/FetchData";

const GetItFast = () => {
  return (
    <ProductListLayout>
      <div className="pagebody">
      <h1>Get It Fast</h1>
        <FetchData />
      </div>
    </ProductListLayout>
  )
}

export default GetItFast;