import PropTypes from 'prop-types';

export const ProductCard = (props) => {
  return (
    <div className='productcardsec'>
        <div className="imgbox"><img src={props.imgsrc} alt={props.title} /></div>
        <div className="contentbox">
            <h3>{props.title}</h3>
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