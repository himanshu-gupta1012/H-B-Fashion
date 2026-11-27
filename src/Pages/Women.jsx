import { useState } from 'react'
import './Women.css'

const Women = () => {

    const [activeCategory, setActiveCategory] = useState('All')

    const categories = [
        'All',
        'Dresses',
        'Tops',
        'Jeans',
        'Kurtis',
        'Blazar',
        'Lehenga',
        'Shoes'
    ]

    const products = [
        {
            id: 1,
            name: 'Elegant Floral Dress',
            price: 1499,
            category: 'Dresses',
            image: '/images/dress1.png'
        },
        {
            id: 2,
            name: 'Casual White Top',
            price: 899,
            category: 'Tops',
            image: '/images/top1.png'
        },
        {
            id: 3,
            name: 'Classic Blue Jeans',
            price: 1299,
            category: 'Jeans',
            image: '/images/jeans1.png'
        },
        {
            id: 4,
            name: 'Traditional Blue Kurti',
            price: 1099,
            category: 'Kurtis',
            image: '/images/kurti1.png'
        },
        {
            id: 5,
            name: 'Casual White Top',
            price: 799,
            category: 'Tops',
            image: '/images/top2.png'
        },
        {
            id: 6,
            name: 'Casual Pink Shoes',
            price: 799,
            category: 'Shoes',
            image: '/images/shoes1.png'
        },
        {
            id: 7,
            name: 'Casual OffWhite Blazzer',
            price: 1999,
            category: 'Blazar',
            image: '/images/blazzer1.png'
        },
        {
            id: 8,
            name: 'Lavendar Floral Dress',
            price: 1999,
            category: 'Dresses',
            image: '/images/dress2.png'
        },
        {
            id: 9,
            name: 'Casual Maroon Blazzer',
            price: 2499,
            category: 'Blazar',
            image: '/images/blazzer2.png'
        },
        {
            id: 10,
            name: 'Lavender Bridal Lehenga',
            price: 9999,
            category: 'Lehenga',
            image: '/images/lehenga1.png'
        },
        {
            id: 11,
            name: 'Black Baggy Jeans',
            price: 1199,
            category: 'Jeans',
            image: '/images/jeans2.png'
        },
        {
            id: 12,
            name: 'Traditional Maroon Kurti',
            price: 1199,
            category: 'Kurtis',
            image: '/images/kurti2.png'
        },
        {
            id: 13,
            name: 'Blush Pink Bridal Lehenga',
            price: 14999,
            category: 'Lehenga',
            image: '/images/lehenga2.png'
        },
        {
            id: 14,
            name: 'Royal Burgundy Butterfly Sneakers',
            price: 999,
            category: 'Shoes',
            image: '/images/shoes2.png'
        }
    ]

    const filteredProducts = activeCategory === 'All'
        ? products
        : products.filter(
            product => product.category === activeCategory
        )

    return (
        <div className="women-page">

            {/* Hero Section */}
            <section className="women-hero">
                <div className="women-hero-content">
                    <span>NEW COLLECTION 2026</span>
                    <h1>Discover Your Style</h1>
                    <p>
                        Explore the latest women's fashion
                        and redefine your everyday look.
                    </p>
                    <button>Shop Collection</button>
                </div>
            </section>

            {/* Category Section */}
            <section className="women-categories">
                <h2>Shop By Category</h2>

                <div className="women-category-list">
                    {categories.map(category => (
                        <button
                            key={category}
                            className={
                                activeCategory === category
                                    ? 'active'
                                    : ''
                            }
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </section>

            {/* Products Section */}
            <section className="women-products">

                <div className="women-products-heading">
                    <div>
                        <h2>Women's Collection</h2>
                        <p>Explore our latest fashion picks</p>
                    </div>
                </div>

                <div className="women-product-grid">
                    {filteredProducts.map(product => (
                        <div className="women-product-card" key={product.id}>

                            <div className="women-product-image">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                />
                            </div>

                            <div className="women-product-info">
                                <h3>{product.name}</h3>
                                <p>₹{product.price}</p>
                                <button>Add To Cart</button>
                            </div>

                        </div>
                    ))}
                </div>

            </section>

        </div>
    )
}

export default Women
