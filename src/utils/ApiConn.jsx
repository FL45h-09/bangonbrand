// import React from 'react'
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { ProductCard } from '../components/global/ProductCard';

export const ApiConn = (props) => {
  // const [categories, setCategories] = useState(null);
  const [data, setData] = useState(null);
  const [limit, setlimit] = useState(12);
  if(props.limits !== undefined){
    setlimit(props.limits);
  }

  const baseApiUrl = "https://dummyjson.com/products/";
      useEffect(() => {
    // data fetching here
    // https://dummyjson.com/docs // This is a documentation for the dummy product API and there is a file for other routes
        const apiUrl = `${baseApiUrl}${props.productId ? props.productId : ""}${props.catName ? "category/" + props.catName : ""}?${"limit="+limit}`;
        console.log(apiUrl);
        fetch(apiUrl)
        .then((response) => {
            return response.json();
          })
          .then((actualData) => {
            // console.log(actualData); // Just logging products to console.
            setData(actualData.products); // Setting data to using the useState hook.
        })
    }, [props.catName]);
    return (
      <ul className="reset">
        {data &&
          data.map(({ id, title, thumbnail, price }) => (
            <li key={id}>
              <ProductCard imgsrc={thumbnail} title={title} id={id} price={price} />
              {/* This Product card is in components/global/ and values are pass through props */}
            </li>
          ))}
      </ul>
  )
}

ApiConn.propTypes = {
    // allProducts: PropTypes.string.isRequired,
    productId: PropTypes.number,
    allCats: PropTypes.string,
    catName: PropTypes.string,
    limits: PropTypes.number
  };