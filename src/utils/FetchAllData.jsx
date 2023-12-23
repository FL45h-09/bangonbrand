// import React from 'react'
import { useEffect, useState } from "react";
import { ProductCard } from "../components/global/ProductCard";

export const FetchAllData = () => {
    const [data, setData] = useState(null);
    const[limit, setlimit] = useState(12);
    useEffect(() => {
    // data fetching here
    // https://dummyjson.com/docs // This is a documentation for the dummy product API and there is a file for other routes
    const apiUrl = `https://dummyjson.com/products?limit=${limit}`;
        fetch(apiUrl)
        .then((response) => {
            return response.json();
          })
          .then((actualData) => {
            console.log(actualData); // Just logging products to console.
            setData(actualData.products); // Setting data to using the useState hook.
        })
    }, []);
  return (
    <div className="productsection">
        <ul className="reset">
        {data &&
          data.map(({ id, title, thumbnail, price }) => (
            <li key={id}>
              <ProductCard imgsrc={thumbnail} title={title} id={id} price={price} />
              {/* This Product card is in components/global/ and values are pass through props */}
            </li>
          ))}
      </ul>
    </div>
  )
}
