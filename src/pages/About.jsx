
import React from "react";
import "../styles/About.css";

function About() {

    return (

        <div className="about-page">


            {/* Hero Section */}
            <section className="about-hero">

                <div className="hero-content">

                    <h1>
                        Welcome to ShopEase
                    </h1>

                    <p>
                        Your trusted online shopping destination
                        where quality products meet affordable prices.
                    </p>

                    <button>
                        Explore Products
                    </button>

                </div>

            </section>



            {/* Story Section */}
            <section className="about-story">

                <div>

                    <h2>
                        Our Story
                    </h2>

                    <p>
                        ShopEase is an online shopping platform
                        created with a vision to make shopping
                        simple, fast and reliable.
                    </p>

                    <p>
                        We bring a wide range of products from
                        fashion, electronics, home essentials and
                        accessories under one platform.
                    </p>

                </div>


                <div className="story-image">

                    <img
                        src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d"
                        alt="shopping"
                    />

                </div>


            </section>




            {/* Why Choose Us */}

            <section className="choose-section">

                <h2>
                    Why Choose Us?
                </h2>


                <div className="feature-container">


                    <div className="feature-card">

                        <h3>
                            🚚 Fast Delivery
                        </h3>

                        <p>
                            Quick and reliable delivery
                            at your doorstep.
                        </p>

                    </div>



                    <div className="feature-card">

                        <h3>
                            🔒 Secure Payment
                        </h3>

                        <p>
                            Safe and secure payment
                            experience.
                        </p>

                    </div>




                    <div className="feature-card">

                        <h3>
                            ⭐ Quality Products
                        </h3>

                        <p>
                            Trusted products with
                            best quality.
                        </p>

                    </div>




                    <div className="feature-card">

                        <h3>
                            💬 Customer Support
                        </h3>

                        <p>
                            We are always ready
                            to help you.
                        </p>

                    </div>


                </div>

            </section>




            {/* Statistics */}

            <section className="stats">


                <div>
                    <h2>
                        10K+
                    </h2>

                    <p>
                        Happy Customers
                    </p>

                </div>



                <div>

                    <h2>
                        500+
                    </h2>

                    <p>
                        Products
                    </p>

                </div>




                <div>

                    <h2>
                        24/7
                    </h2>

                    <p>
                        Support
                    </p>

                </div>




                <div>

                    <h2>
                        100%
                    </h2>

                    <p>
                        Secure Shopping
                    </p>

                </div>


            </section>




            {/* Categories */}

            <section className="categories">


                <h2>
                    Our Categories
                </h2>



                <div className="category-box">


                    <div>
                        👕
                        <h3>
                            Fashion
                        </h3>
                    </div>


                    <div>
                        📱
                        <h3>
                            Electronics
                        </h3>
                    </div>


                    <div>
                        🏠
                        <h3>
                            Home
                        </h3>
                    </div>


                    <div>
                        🎧
                        <h3>
                            Accessories
                        </h3>
                    </div>


                </div>


            </section>





            {/* Contact */}

            <section className="contact">


                <h2>
                    Have Any Questions?
                </h2>


                <p>
                    Our support team is always ready to help you.
                </p>


                <button>
                    Contact Us
                </button>


            </section>



        </div>

    );

}


export default About;