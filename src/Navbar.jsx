
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

import "./navbar.css";


function Navbar() {

    const [search, setSearch] = useState("");

    const navigate = useNavigate();


    const suggestions = [
        "electronics",
        "jewelery",
        "men's clothing",
        "women's clothing",
        "men jacket",
        "shirt"
    ];


    const filteredSuggestions = suggestions.filter(item =>
        item.toLowerCase().includes(search.toLowerCase())
    );



    const selectSuggestion = (item) => {

        setSearch(item);

        navigate(`/products?search=${item}`);

    };



    return (

        <nav className="navbar">


            {/* Logo */}

            <h2>
                🛍️ MyStore
            </h2>



            {/* Search */}

            <div className="search-box">


                <input

                    type="text"

                    placeholder="Search products..."

                    value={search}

                    onChange={(e) => setSearch(e.target.value)}

                />


                <button
                    onClick={() =>
                        navigate(`/products?search=${search}`)
                    }
                >
                    Search
                </button>



                {
                    search && (

                        <div className="suggestions">


                            {
                                filteredSuggestions.map(item => (

                                    <p
                                        key={item}
                                        onClick={() => selectSuggestion(item)}
                                    >
                                        {item}
                                    </p>

                                ))
                            }


                        </div>

                    )
                }


            </div>




            {/* Navigation */}

            <div className="nav-links">


                <NavLink to="/">
                    Home
                </NavLink>


                <NavLink to="/products">
                    Products
                </NavLink>


                <NavLink to="/about">
                    About
                </NavLink>

                <NavLink to="/cart">
                    🛒 Cart
                </NavLink>


                <NavLink to="/my-orders">
                    📦 My Orders
                </NavLink>


            </div>



        </nav>

    );

}


export default Navbar;