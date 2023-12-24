// import React from 'react'
import { useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import { BreadcrumbSec } from "../components/global/BreadcrumbSec";

export const ProductSinglePage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState();
    // const productId = match.params.proId;
    const {productId} = useParams();
    // console.log(productId);
    useEffect(() => {
        fetch(`https://dummyjson.com/products/${productId}`, {})
          .then((res) => res.json())
          .then((response) => {
            setData(response);
            setIsLoading(false);
            // console.log(`https://dummyjson.com/products/${productId}`)
          })
          .catch((error) => console.log(error));
      }, [productId]);
  return (
    <div>
      <BreadcrumbSec />
        {!isLoading && (
        <>
        <div className="imgbox"><img src={data.thumbnail} alt={data.title} /></div>
          <h1>Title: {data.title}</h1>
          <h2>Description: {data.description}</h2>
          <h2>price: {data.price}</h2>
          <h2>Rating: {data.rating}</h2>
          <h2>Stock: {data.stock}</h2>
          <h2>Category: {data.category}</h2>
        </>
      )}
    </div>
  )
}
