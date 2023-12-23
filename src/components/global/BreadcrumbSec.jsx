// import React from 'react'
// import { Breadcrumbs } from "react-breadcrumbs-dynamic";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { ConvertSlug } from "../../utils/Functions";

export const BreadcrumbSec = () => {
  let currentPath = useLocation().pathname;
  currentPath = ConvertSlug(currentPath);

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
