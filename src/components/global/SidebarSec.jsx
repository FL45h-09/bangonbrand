import { NavLink } from "react-router-dom";
import { FetchCategories } from '../../utils/FetchCategories'


export const SidebarSec = () => {
  return (
    <div className="sidebarsec">
      <div className="sidebarbox">
        <h3>Quick Links</h3>
          <ul className="reset sidebarnav">
            <li className="active"><NavLink to="#">New Produts</NavLink></li>
            <li className=""><NavLink to="#">What on hot</NavLink></li>
            <li className=""><NavLink to="/get-it-fast">Get in Fast</NavLink></li>
            <li className=""><NavLink to="#">Eco Friendly</NavLink></li>
            <li className=""><NavLink to="#">Favourites under $5</NavLink></li>
            <li className=""><NavLink to="#">On Sale</NavLink></li>
        </ul>
      </div>
      <div className="sidebarbox">
        <h3>Categories</h3>
        <FetchCategories />
      </div>
      {/* <ul className="reset sidebarnav">
          <li className="active"><NavLink to="#">Categories</NavLink></li>
          <li><NavLink to="#">Reusable Coffee Cups</NavLink></li>
          <li><NavLink to="#">Hats</NavLink></li>
          <li><NavLink to="#">Plastic Pens</NavLink></li>
          <li><NavLink to="#">Metal Pens</NavLink></li>
          <li><NavLink to="#">Stubby Holders</NavLink></li>
          <li><NavLink to="#">Tote Bags</NavLink></li>
          <li><NavLink to="#">Calico / Eco Bags</NavLink></li>
          <li><NavLink to="#">Paper Bags</NavLink></li>
          <li><NavLink to="#">Jute Bags</NavLink></li>
          <li><NavLink to="#">Duffle / Sport Bags</NavLink></li>
          <li><NavLink to="#">Cooler Bags</NavLink></li>
          <li><NavLink to="#">Caps</NavLink></li>
      </ul> */}
    </div>
  )
}
