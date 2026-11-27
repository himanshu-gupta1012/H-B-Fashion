
import './Productcard.css';

import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';

const Productcard = ({ product }) => {

    const { addToCart } = useContext(CartContext);

    return (
        <div className="product-card">

            <div className="product-image">

                <span className="discount">
                    {product.discount}
                </span>

                <img src={product.image} alt={product.name} />

            </div>

            <div className="product-info">

                <h3>{product.name}</h3>

                <p>{product.category}</p>

                <div className="price">
                    <strong>₹{product.price}</strong>
                    <del>₹{product.oldPrice}</del>
                </div>

                <button onClick={() => addToCart(product)}>
                    Add To Cart
                </button>

            </div>

        </div>
    );
};

export default Productcard;
