// import React from 'react'
import { useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import { BreadcrumbSec } from "../components/global/BreadcrumbSec";
import { ProductCard } from "../components/global/ProductCard";
import { ProductListLayout } from "../components/layouts/ProductListLayout";

export const CatListing = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState();
    // const catId = match.params.proId;
    const {catId} = useParams();
    // console.log(productId);
    useEffect(() => {
        fetch(`https://dummyjson.com/products/category/${catId}`, {})
          .then((res) => res.json())
          .then((response) => {
            setData(response.products);
            console.log(data);
            setIsLoading(false);
            // console.log(`https://dummyjson.com/products/${catId}`)
          })
          .catch((error) => console.log(error));
      }, [catId]);
  return (
    <>
      <ProductListLayout>
      <div className="productsection">
            {!isLoading && (
                <>
                <ul className="reset">
                    {data &&
                    data.map(({ id, title, thumbnail, price }) => (
                        <li key={id}>
                        <ProductCard imgsrc={thumbnail} title={title} id={id} price={price} />
                        {/* This Product card is in components/global/ and values are pass through props */}
                        </li>
                    ))}
                </ul>
                </>
            )}
      </div>
      </ProductListLayout>
    </>
  )
}
