import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import { useNavigate } from 'react-router-dom';

import './Cart.css';

const Cart = () => {

  const {
    cartItems,
    updateQuantity,
    removeFromCart,
    totalPrice
  } = useContext(CartContext);

  const navigate = useNavigate();

  return (
    <div className="cart-page">

      <h1>Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <h3>Your Cart Is Empty</h3>
      ) : (

        <div className="cart-container">

          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>

              <img src={item.image} alt={item.name} />

              <div>
                <h3>{item.name}</h3>
                <p>Price: ₹{item.price}</p>

                {/* Quantity Buttons */}
                <div className="quantity-box">
                  <button onClick={() => updateQuantity(item.id, "decrease")}>
                    -
                  </button>

                  <span>{item.quantity}</span>

                  <button onClick={() => updateQuantity(item.id, "increase")}>
                    +
                  </button>
                </div>

                {/* Remove Button */}
                <button onClick={() => removeFromCart(item.id)}>
                  Remove
                </button>
              </div>

            </div>
          ))}

          {/* Total Price */}
          <div className="cart-total">
            <h2>Total: ₹{totalPrice}</h2>
            <button onClick={() => navigate('/checkout')}>
              Proceed To Checkout
            </button>
          </div>

        </div>

      )}

    </div>
  );
};

export default Cart;
