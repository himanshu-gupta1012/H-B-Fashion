
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './Components/Header';
import Home from './Pages/Home';
import CartProvider from './Context/CartContext';
import Cart from './Pages/Cart'
import Checkout from './Pages/Checkout';
import OrderSuccess from './Pages/OrderSuccess';
import Login from './Pages/Login'
import Signup from './Pages/Signup';
import Men from './Pages/Men';

const App = () => {
    return (
        <BrowserRouter>

            <CartProvider>

                <Header />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/order-success" element={<OrderSuccess />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/men" element={<Men />} />
                </Routes>

            </CartProvider>

        </BrowserRouter>
    );
};

export default App;
