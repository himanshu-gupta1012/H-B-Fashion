
import './Men.css';
import { useState } from 'react';
import Productcard from '../Components/Productcard';

const Men = () => {

    const [selectedCategory, setSelectedCategory] = useState('All');
    const [sortOrder, setSortOrder] = useState('default');

    const products = [
        {
            id: 101,
            name: "Classic Cotton T-Shirt",
            category: "T-Shirts",
            price: 799,
            oldPrice: 999,
            discount: "-20%",
            image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 102,
            name: "Premium Denim Jeans",
            category: "Jeans",
            price: 1299,
            oldPrice: 1499,
            discount: "-15%",
            image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 103,
            name: "Casual White Shirt",
            category: "Shirts",
            price: 999,
            oldPrice: 1299,
            discount: "-23%",
            image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 104,
            name: "Men's Casual Jacket",
            category: "Jackets",
            price: 1899,
            oldPrice: 2299,
            discount: "-17%",
            image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 105,
            name: "Black Basic T-Shirt",
            category: "T-Shirts",
            price: 699,
            oldPrice: 899,
            discount: "-22%",
            image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 106,
            name: "Slim Fit Blue Jeans",
            category: "Jeans",
            price: 1399,
            oldPrice: 1699,
            discount: "-18%",
            image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 107,
            name: "Premium Formal Shirt",
            category: "Shirts",
            price: 1199,
            oldPrice: 1499,
            discount: "-20%",
            image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 108,
            name: "Winter Denim Jacket",
            category: "Jackets",
            price: 2199,
            oldPrice: 2599,
            discount: "-15%",
            image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=600&q=80"
        }
    ];

    let filteredProducts = products.filter((product) => {
        return selectedCategory === 'All' ||
            product.category === selectedCategory;
    });

    if (sortOrder === 'low-to-high') {
        filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'high-to-low') {
        filteredProducts.sort((a, b) => b.price - a.price);
    }

    return (
        <div className="men-page">

            {/* Men Hero Section */}
            <section className="men-hero">
                <div className="men-hero-content">
                    <p>H&B FASHION COLLECTION</p>
                    <h1>MEN'S <span>STYLE</span></h1>
                    <h3>Upgrade Your Everyday Look</h3>
                    <p>Discover the latest trends in men's fashion.</p>
                    <button onClick={() =>
                        document.getElementById('men-products').scrollIntoView({
                            behavior: 'smooth'
                        })
                    }>
                        SHOP COLLECTION
                    </button>
                </div>
            </section>

            {/* Men Categories */}
            <section className="men-categories">
                <p className="men-subtitle">EXPLORE YOUR STYLE</p>
                <h2>Men's Collection</h2>

                <div className="men-filter-buttons">
                    {['All', 'T-Shirts', 'Shirts', 'Jeans', 'Jackets'].map((category) => (
                        <button
                            key={category}
                            className={selectedCategory === category ? 'active' : ''}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </section>

            {/* Products Section */}
            <section className="men-products-section" id="men-products">

                <div className="men-products-heading">
                    <div>
                        <h2>Shop Men's Fashion</h2>
                        <p>{filteredProducts.length} Trending Products Available</p>
                    </div>

                    <select
                        value={sortOrder}
                        onChange={(e) => setSortOrder(e.target.value)}
                    >
                        <option value="default">Sort By</option>
                        <option value="low-to-high">Price: Low to High</option>
                        <option value="high-to-low">Price: High to Low</option>
                    </select>
                </div>

                <div className="men-products-container">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((product) => (
                            <Productcard
                                key={product.id}
                                product={product}
                            />
                        ))
                    ) : (
                        <p>No products found.</p>
                    )}
                </div>

            </section>

        </div>
    );
};

export default Men;
