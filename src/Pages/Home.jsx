import './Home.css';
import Productcard from '../Components/Productcard';

const Home = () => {

    const products = [
        {
            id: 1,
            name: "Classic Cotton T-Shirt",
            category: "Men's Collection",
            price: 799,
            oldPrice: 999,
            discount: "-20%",
            image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 2,
            name: "Premium Denim Jeans",
            category: "Men's Collection",
            price: 1299,
            oldPrice: 1499,
            discount: "-15%",
            image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 3,
            name: "Elegant Summer Dress",
            category: "Women's Collection",
            price: 1499,
            oldPrice: 1999,
            discount: "-25%",
            image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 4,
            name: "Classic Casual Sneakers",
            category: "Footwear Collection",
            price: 1799,
            oldPrice: 1999,
            discount: "-10%",
            image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80"
        }
    ];

    return (
        <div className="home">

            {/* Hero Section */}
            <section className="hero-section">

                <div className="hero-content">
                    <p>H&B Fashion</p>

                    <h1>
                        <p className='para1'>NEW COLLECTION</p>
                        Fashion <br />
                        For Everyone
                    </h1>

                    {/* <span>
                        Elevate your wardrobe with our exclusive
                        fashion collection.
                    </span> */}

                    <p className='para'>Men | Women | Accessories</p>

                    <button>SHOP NOW</button>
                </div>

            </section>

            {/* Featured Categories */}
            <section className="categories-section">

                <div className="section-heading">
                    <p>EXPLORE OUR COLLECTION</p>
                    <h2>Shop By Category</h2>
                </div>

                <div className="categories-container">

                    <div className="category-card">
                        <img src="https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=600&q=80" alt="Men Fashion" />
                        <div className="category-content">
                            <h3>Men</h3>
                            <button>SHOP NOW</button>
                        </div>
                    </div>

                    <div className="category-card">
                        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80" alt="Women Fashion" />
                        <div className="category-content">
                            <h3>Women</h3>
                            <button>SHOP NOW</button>
                        </div>
                    </div>

                    <div className="category-card">
                        <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80" alt="Accessories" />
                        <div className="category-content">
                            <h3>Accessories</h3>
                            <button>SHOP NOW</button>
                        </div>
                    </div>

                    <div className="category-card">
                        <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80" alt="Footwear" />
                        <div className="category-content">
                            <h3>Footwear</h3>
                            <button>SHOP NOW</button>
                        </div>
                    </div>

                </div>

            </section>


            {/* Trending Products */}
            <div className="products-container">

                {products.map((product) => (
                    <Productcard
                        key={product.id}
                        product={product}
                    />
                ))}

            </div>

        </div>
    );
};

export default Home;
