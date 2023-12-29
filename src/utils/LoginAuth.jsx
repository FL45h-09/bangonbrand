// import React from 'react'
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { ProductCard } from '../components/global/ProductCard';

export const LoginAuth = () => {
  const [data, setData] = useState(null);
  const [dataCount, setDataCount] = useState();
  const baseApiUrl = "https://dummyjson.com/products/";
  return (
    <>

    </>
  )
}

LoginAuth.PropTypes = {
  uname : PropTypes.string.isRequired,
  upasswd : PropTypes.string.isRequired
}
