// import React from 'react'
import { CatSidebarSec } from "../global/CatSidebarSec"
import { BreadcrumbSec } from "../global/BreadcrumbSec";
import PropTypes from "prop-types";

export const ProductSingleLayout = ({children}) => {
  return (
    <div className="productsinglepg">
      <BreadcrumbSec />
      <div className="mainwrap">
        <CatSidebarSec />
        {children}
      </div>
    </div>
  )
}

ProductSingleLayout.propTypes = {
  children: PropTypes.element.isRequired
};