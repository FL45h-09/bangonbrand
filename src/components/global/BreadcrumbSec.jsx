// import React from 'react'
// import { Breadcrumbs } from "react-breadcrumbs-dynamic";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const BreadcrumbSec = () => {
  let currentPath = useLocation();
  currentPath = currentPath.pathname;
  currentPath = currentPath.split('-').filter(Boolean).join(' ');
  currentPath = currentPath.replace('/', '').replace('/', '');
  // currentPath = currentPath;
  return (
    <div className="breadcrumbsec">
        <ul className="reset">
          <li><NavLink to='/'>Home</NavLink></li>
          <li>{currentPath}</li>
        </ul>
    </div>
  )
}
