// import React from 'react'
import { CatSidebarSec } from "../global/CatSidebarSec";
import { BreadcrumbSec } from "../global/BreadcrumbSec";
import PropTypes from 'prop-types';

export const ProductListLayout = ({ children }) => {
  return (
    <div className="listingsection">
      <BreadcrumbSec />
      <div className="mainwrap">
        <CatSidebarSec />
        {children}
      </div>
    </div>
  )
}

ProductListLayout.propTypes = {
  children: PropTypes.element.isRequired
};