// import React from 'react'
// import { HeaderSec } from "../HeaderSec";
// import { FooterSec } from "../FooterSec";
import { SidebarSec } from "../SidebarSec";
import PropTypes from 'prop-types';  

const LsideBar = ({ children }) => {
  return (
    <div className='fplayout'>
      {/* <div className="container"> */}
        <div className="mainwrap">
          <SidebarSec />
          {children}
        </div>
      </div>
    // </div>
  )
}

export default LsideBar;

LsideBar.propTypes = {
  children: PropTypes.element.isRequired
};
