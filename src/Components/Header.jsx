import './Header.css';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import {
    FiSearch,
    FiUser,
    FiShoppingBag,
    FiHeart
} from 'react-icons/fi';

import { useContext, useState } from 'react';
import { CartContext } from '../Context/CartContext';

const Header = () => {
    const [showProfile, setShowProfile] = useState(false);

    const { cartCount } = useContext(CartContext);
    const navigate = useNavigate();
    const location = useLocation();

    const isLoginPage = location.pathname === '/login';

    const handleAuthNavigation = () => {
        if (isLoginPage) {
            navigate('/signup');
        } else {
            navigate('/login');
        }
    };

    return (
        <header className="header">
            <div className="header-container">

                <div className="logo">
                    H&B <span>FASHION</span>
                </div>

                <nav className="navbar">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/men">Men</NavLink>
                    <NavLink to="/women">Women</NavLink>
                    <NavLink to="/new-arrivals">New Arrivals</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </nav>

                <div className="header-icons">

                    <FiSearch />

                    {/* Profile Icon and Dropdown */}
                    <div className="profile-wrapper">
                        <FiUser
                            className="profile-icon"
                            onClick={() => setShowProfile(!showProfile)}
                        />

                        {showProfile && (
                            <div className="profile-dropdown">

                                <div className="profile-info">
                                    <h3>Himanshu Gupta</h3>
                                    <p>himanshu@gmail.com</p>
                                </div>

                                <hr />

                                <button onClick={() => setShowProfile(false)}>
                                    My Profile
                                </button>

                                <button onClick={() => setShowProfile(false)}>
                                    My Orders
                                </button>

                                <button
                                    onClick={() => {
                                        setShowProfile(false);
                                        navigate('/login');
                                    }}
                                >
                                    Logout
                                </button>

                            </div>
                        )}
                    </div>

                    {/* Sign In / Sign Up */}
                    <button
                        className="signup-btn"
                        onClick={handleAuthNavigation}
                    >
                        {isLoginPage ? 'Sign Up' : 'Sign In'}
                    </button>

                    <FiHeart />

                    {/* Cart Icon */}
                    <div
                        className="cart-icon"
                        onClick={() => navigate('/cart')}
                    >
                        <FiShoppingBag />
                        <span>{cartCount}</span>
                    </div>

                </div>

            </div>
        </header>
    );
};

export default Header;
