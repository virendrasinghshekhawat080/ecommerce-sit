
import { useEffect, useState } from "react";
import "./home.css";

function Home() {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(data => setProducts(data));

    }, []);


    return (

        <div>


            {/* 🔥 Hero Banner */}

            <section className="hero">

                <h1>
                    Welcome to MyStore 🛍️
                </h1>

                <p>
                    Best Deals Today | Latest Products | Amazing Offers
                </p>

                <button>
                    Shop Now
                </button>

            </section>



            {/* 🔥 Category Cards */}

            <section className="category-section">

                <h2>
                    Shop By Category
                </h2>


                <div className="category-cards">


                    <div className="category-card">
                        📱
                        <h3>Electronics</h3>
                    </div>


                    <div className="category-card">
                        👕
                        <h3>Fashion</h3>
                    </div>


                    <div className="category-card">
                        💍
                        <h3>Jewelry</h3>
                    </div>


                </div>


            </section>




            {/* 🔥 Trending Products */}

            <section>

                <h2 className="title">
                    Trending Products 🔥
                </h2>


                <div className="product-grid">


                    {
                        products.map(item => (

                            <div
                                key={item.id}
                                className="product-card"
                            >


                                <img
                                    src={item.image}
                                    alt={item.title}
                                />


                                <h4>
                                    {item.title.slice(0, 30)}
                                </h4>


                                <p>
                                    ₹{item.price}
                                </p>


                                <button>
                                    Add Cart 🛒
                                </button>


                            </div>

                        ))
                    }


                </div>


            </section>



        </div>

    );

}


export default Home;