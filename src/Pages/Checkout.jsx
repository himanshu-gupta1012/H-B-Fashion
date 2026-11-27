import { useContext, useState } from 'react';
import { CartContext } from '../Context/CartContext';
import './Checkout.css';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
    const { cartItems, totalPrice, clearCart } = useContext(CartContext);

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        pincode: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // alert('Order Placed Successfully!');

        if(cartItems.length === 0) {
            alert('your cart is empty!');
            return;
        }

        clearCart();
        navigate('/order-success');
    };

    return (
        <div className="checkout-page">

            <h1>Checkout</h1>

            <div className="checkout-container">

                <form className="checkout-form" onSubmit={handleSubmit}>
                    <h2>Shipping Details</h2>

                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />

                    <textarea
                        name="address"
                        placeholder="Full Address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="text"
                        name="city"
                        placeholder="City"
                        value={formData.city}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="text"
                        name="pincode"
                        placeholder="Pincode"
                        value={formData.pincode}
                        onChange={handleChange}
                        required
                    />

                    <button type="submit">
                        Place Order
                    </button>
                </form>

                <div className="order-summary">
                    <h2>Order Summary</h2>

                    {cartItems.map((item) => (
                        <div className="summary-item" key={item.id}>
                            <span>{item.name} × {item.quantity}</span>
                            <span>₹{item.price * item.quantity}</span>
                        </div>
                    ))}

                    <hr />

                    <h3>Total: ₹{totalPrice}</h3>
                </div>

            </div>
        </div>
    );
};

export default Checkout;
