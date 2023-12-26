// import React from 'react'
// import { useEffect, useState } from "react";
import { ProductCard } from "../components/global/ProductCard";
import { ApiConn } from "./ApiConn";

export const FetchAllData = () => {
    // const [data, setData] = useState(null);
    // const[limit, setlimit] = useState(12);
    // useEffect(() => {
    // // data fetching here
    // // https://dummyjson.com/docs // This is a documentation for the dummy product API and there is a file for other routes
    // const apiUrl = `https://dummyjson.com/products?limit=${limit}`;
    //     fetch(apiUrl)
    //     .then((response) => {
    //         return response.json();
    //       })
    //       .then((actualData) => {
    //         console.log(actualData); // Just logging products to console.
    //         setData(actualData.products); // Setting data to using the useState hook.
    //     })
    // }, []);
  return (
    <div className="productsection">
        <ApiConn />
    </div>
  )
}
