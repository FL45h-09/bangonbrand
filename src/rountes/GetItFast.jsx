// import React from 'react'
import { ProductListLayout } from "../components/layouts/ProductListLayout";
import { FetchAllData } from "../utils/FetchAllData";

const GetItFast = () => {
  return (
    <ProductListLayout>
      <div className="pagebody">
      <div className="catheading"><h1>Get It <span>Fast</span></h1></div>
        <FetchAllData />
      </div>
    </ProductListLayout>
  )
}

export default GetItFast;