
import Footer from "../components/Footer";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { getDiscountedPrice } from "../utils/discount";
import "./../styles/home.css";

function Home() {

    const [products, setProducts] = useState([]);
    const [banner, setBanner] = useState(0);

    const navigate = useNavigate();
    const { addToCart } = useContext(CartContext);

    // 🔥 Fetch Products
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    // 🔥 Banner Data
    const banners = [
        "🔥 Mega Sale - Up To 50% OFF",
        "⚡ Electronics Best Deals",
        "👕 Fashion Sale Starting Today"
    ];

    // 🔥 Auto Banner
    useEffect(() => {
        const timer = setInterval(() => {
            setBanner(prev => (prev + 1) % banners.length);
        }, 3000);

        return () => clearInterval(timer);
    }, []);

    // 🔥 Categories
    const categories = [
        { name: "Electronics", icon: "💻", value: "electronics" },
        { name: "Jewellery", icon: "💍", value: "jewelery" },
        { name: "Men Fashion", icon: "👕", value: "men's clothing" },
        { name: "Women Fashion", icon: "👗", value: "women's clothing" }
    ];

    // 🔥 100+ Products (MAIN FIX)
    const bigProducts = Array(6).fill(products).flat(); // 20 * 6 = 120 products

    return (
        <div className="home-container">

            {/* Hero */}
            <div className="hero">
                <h1>Welcome To MyStore 🛍️</h1>
                <h2>{banners[banner]}</h2>

                <button onClick={() => navigate("/products")}>
                    Shop Now
                </button>
            </div>

            {/* Categories */}
            <h2 className="section-title">Shop By Category</h2>

            <div className="category-cards">
                {categories.map(item => (
                    <div
                        key={item.value}
                        className="category-card"
                        onClick={() =>
                            navigate(`/products?category=${item.value}`)
                        }
                    >
                        <h1>{item.icon}</h1>
                        <h3>{item.name}</h3>
                    </div>
                ))}
            </div>

            {/* Products */}
            <h2 className="section-title">
                Trending Products 🔥
            </h2>

            <div className="product-grid">

                {bigProducts.map((item, index) => {

                    const { finalPrice, discount } =
                        getDiscountedPrice(item.price, item.category);

                    return (
                        <div
                            key={index}   // ✅ FIX (no duplicate issue)
                            className="product-card"
                            onClick={() =>
                                navigate(`/product/${item.id}`)
                            }
                        >

                            {discount > 0 && (
                                <span className="discount">
                                    {discount}% OFF
                                </span>
                            )}

                            <button
                                className="wishlist"
                                onClick={(e) => e.stopPropagation()}
                            >
                                ❤️
                            </button>

                            <img src={item.image} alt={item.title} />

                            <h4>{item.title.slice(0, 35)}</h4>

                            <div className="rating">
                                ⭐⭐⭐⭐⭐
                            </div>

                            <p className="price">
                                <span style={{
                                    textDecoration: "line-through",
                                    color: "gray",
                                    marginRight: "6px"
                                }}>
                                    ₹{item.price}
                                </span>

                                <span style={{
                                    color: "green",
                                    fontWeight: "bold"
                                }}>
                                    ₹{finalPrice}
                                </span>
                            </p>

                            <div className="product-buttons">

                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        addToCart(item);
                                    }}
                                >
                                    Add Cart 🛒
                                </button>

                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        navigate(`/product/${item.id}`);
                                    }}
                                >
                                    Buy Now ⚡
                                </button>

                            </div>

                        </div>
                    );
                })}

            </div>

            {/* Footer */}
            <Footer />

        </div>
    );
}

export default Home;