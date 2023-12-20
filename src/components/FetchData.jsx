// import React from 'react'
import { useEffect, useState } from "react";

export const FetchData = () => {
    const [data, setData] = useState(null);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);
    useEffect(() => {
    // data fetching here
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
      <div className="catheading"><h2><span>New </span> Products</h2></div>
        <ul className="reset">
        {data &&
          data.map(({ id, title, thumbnail, price }) => (
            <li key={id}>
                <div className="imgbox"><img src={thumbnail} alt={title} /></div>
                <div className="contentbox">
                    <h3>{title}</h3>
                    <h5>Product Sku: {id}</h5>
                    <p>Priced from ${price}</p>
                </div>
            </li>
          ))}
      </ul>
    </div>
  )
}
