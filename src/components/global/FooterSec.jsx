import { NavLink } from "react-router-dom"

export const FooterSec = () => {
  const currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  return (
    <div className="footersection">
      <div className="container">
        <div className="logosec"><img src="/images/logo.png" width={277} height={49} alt="footer logo" /></div>
        <div className="footerwrap">
          <div className="footerbox">
            <ul className="reset">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/about-us/">About Us</NavLink></li>
              <li><NavLink to="/categories/">Popular categories</NavLink></li>
              <li><NavLink to="/products/">All Products</NavLink></li>
              <li><NavLink to="/contact/">Contact us</NavLink></li>
            </ul>
          </div>
          <div className="footerbox">
            <ul className="reset">
              <li><NavLink to="/terms-n-conditions/">Terms & Conditions</NavLink></li>
              <li><NavLink to="/privacy-policy/">Privacy Policy</NavLink></li>
              <li><NavLink to="/artWork-n-decoration/">ArtWork & Decoration</NavLink></li>
              <li><NavLink to="/products/">All Products</NavLink></li>
              <li><NavLink to="/faqs/">FAQ’s</NavLink></li>
            </ul>
          </div>
          <div className="footerbox">
            <ul className="reset">
              <li><img src="/images/member-logo1.png" alt="members logo" /></li>
              <li><img src="/images/member-logo2.png" alt="members logo" /></li>
            </ul>
          </div>
          <div className="footerbox">
            <ul className="reset socialicons">
              <li><NavLink to="#">Facebook</NavLink></li>
              <li><NavLink to="#">Youtube</NavLink></li>
              <li><NavLink to="#">Instagram</NavLink></li>
            </ul>
            <p>Copyright © {currentYear} BANG ON BRAND</p>
          </div>
        </div>
      </div>
    </div>
  )
}
