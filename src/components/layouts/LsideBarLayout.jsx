// import React from 'react'
// import { HeaderSec } from "../HeaderSec";
// import { FooterSec } from "../FooterSec";
import { SidebarSec } from "../global/SidebarSec";
import PropTypes from 'prop-types';  

const LsideBarLayout = ({ children }) => {
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

export default LsideBarLayout;

LsideBarLayout.propTypes = {
  children: PropTypes.element.isRequired
};
