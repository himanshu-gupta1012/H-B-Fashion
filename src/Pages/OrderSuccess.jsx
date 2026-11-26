import { useNavigate } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';
import './OrderSuccess.css';

const OrderSuccess = () => {
    const navigate = useNavigate();

    return (
        <div className="success-page">

            <FaCheckCircle className="success-icon" />

            <h1>Order Placed Successfully!</h1>

            <p>
                Thank you for shopping with H&B Fashion.
                Your order has been received.
            </p>

            <button onClick={() => navigate('/')}>
                Continue Shopping
            </button>

        </div>
    );
};

export default OrderSuccess;