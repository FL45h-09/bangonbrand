import { NavBarSec } from "./NavBarSec";
import logoSrc from "/images/logo.png";
import { NavLink } from "react-router-dom";

export const HeaderSec = () => {
  return (
    <div className="headersection">
        <div className="headertop">
          <div className="container">
            <ul className="reset">
              <li><NavLink to='#'>Cart</NavLink></li>
              <li><NavLink to='#'>Wishlist</NavLink></li>
              <li><NavLink to='#'>Search</NavLink></li>
              <li><NavLink to='#'>Sign in</NavLink></li>
            </ul>
          </div>
        </div>
        <div className="mainheader">
          <div className="container">
            <div className="logo"><NavLink to='/'><img src={logoSrc} alt="Logo" /></NavLink></div>
            <div className="headersec"><NavBarSec /></div>
          </div>
        </div>
      </div>
  )
}
