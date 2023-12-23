import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

export const ProductCard = (props) => {
  return (
    <div className='productcardsec'>
        <div className="imgbox"><NavLink to={`/products/${props.sku}`} ><img src={props.imgsrc} alt={props.title} /></NavLink>  </div>
        <div className="contentbox">
            <h3><NavLink to={`/products/${props.sku}`} >{props.title}</NavLink></h3>
            <h5>Product Sku: {props.sku}</h5><p>Priced from ${props.price}</p>
        </div>
    </div>
  )
}

ProductCard.propTypes = {
    imgsrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    sku: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired
  };