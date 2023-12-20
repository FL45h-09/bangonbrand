import { NavBarSec } from "./NavBarSec";
import logoSrc from "/images/logo.png";
import { Link } from "react-router-dom";

export const HeaderSec = () => {
  return (
    <div className="headersection">
        <div className="headertop">
          <div className="container">
            <ul className="reset">
              <li><Link to='#'>Cart</Link></li>
              <li><Link to='#'>Wishlist</Link></li>
              <li><Link to='#'>Search</Link></li>
              <li><Link to='#'>Sign in</Link></li>
            </ul>
          </div>
        </div>
        <div className="mainheader">
          <div className="container">
            <div className="logo"><Link to='/'><img src={logoSrc} alt="Logo" /></Link></div>
            <div className="headersec"><NavBarSec /></div>
          </div>
        </div>
      </div>
  )
}
