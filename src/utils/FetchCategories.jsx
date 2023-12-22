// import React from 'react'
import { useEffect, useState } from "react";
// import { ProductCard } from "../components/global/ProductCard";
import { NavLink } from "react-router-dom";

export const FetchCategories = () => {
    const [categories, setCategories] = useState(null);
    // const[limit, setlimit] = useState(8);
    useEffect(() => {
        // data fetching here
        // https://dummyjson.com/docs // This is a documentation for the dummy product API and there is a file for other routes
        const apiUrl = `https://dummyjson.com/products/categories`;
            fetch(apiUrl)
            .then((response) => {
                return response.json();
              })
              .then((actualData) => {
                setCategories(actualData); // Setting data to using the useState hook.
            })
        }, []);
  return (
    <ul className="reset categorynav">
        {categories &&
            categories.map((item) => (
            <li key={item}><NavLink to="#">{item}</NavLink></li>
        ))}
    </ul>
  )
}
