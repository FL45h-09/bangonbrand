// import React from 'react'
import { useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import { ProductSingleLayout } from "../components/layouts/ProductSingleLayout";
import { ConvertSlug } from "../utils/Functions";
import { NavLink } from "react-router-dom";

export const ProductSinglePage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState();
    // const productId = match.params.proId;
    const {productId} = useParams();
    const {catId} = useParams();
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
    <ProductSingleLayout>
        <div className="pagebody">
        {!isLoading && (
        <>
        <div className="imgbox"><img src={data.thumbnail} alt={data.title} /></div>
          <div className="productdetails">
            <h1>Title: {data.title}</h1>
            <ul className="reset">
              <li>price: {data.price}</li>
              <li>Stock: {data.stock}</li>
              <li>Rating: {data.rating}</li>
            </ul>
            <p>Description: {data.description}</p>
            <p>Category: <NavLink to={`/categories/${data.category}/`}>{ConvertSlug(data.category)}</NavLink></p>
            <div className="btnwrap">
              <div className="btnsec"><NavLink to="#" className="btn">Add to Cart</NavLink></div>
              <div className="btnsec"><NavLink to="#" className="btn">Buy Now</NavLink></div>
            </div>
          </div>
        </>
      )}
        </div>
    </ProductSingleLayout>
  )
}
