// import React from 'react'
import { useEffect, useState } from "react";
import { ProductCard } from "../components/global/ProductCard";

export const FetchData = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
    // data fetching here
    // https://dummyjson.com/docs // This is a documentation for the dummy product API and there is a file for other routes
        fetch(`https://dummyjson.com/products?limit=8`)
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
              <ProductCard imgsrc={thumbnail} title={title} sku={id} price={price} />
            </li>
          ))}
      </ul>
    </div>
  )
}
