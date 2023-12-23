// import React from 'react'
import { Outlet, Link } from "react-router-dom";

export const NavBarSec = () => {
  return (
    <div className="navsection">
        <nav>
          <ul className="reset">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/new-products/">New Products</Link></li>
            <li><Link to="/get-it-fast/">Get It Fast</Link></li>
            <li><Link to="/categories/">Popular Caregories</Link></li>
            <li><Link to="/products/">All Products</Link></li>
          </ul>
        </nav>
        <Outlet />
    </div>
  )
}