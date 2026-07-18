
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/navbar.css";


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

        setSearch("");

        navigate(`/products?search=${item}`);

    };



    return (

        <nav className="navbar">


            {/* Logo */}

            <div className="logo">

                🛍️ MyStore

            </div>



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
                    🔍 Search
                </button>



                {
                    search.length > 0 && (

                        <div className="suggestions">


                            {
                                filteredSuggestions.map(item => (

                                    <div

                                        className="suggestion-item"

                                        key={item}

                                        onClick={() =>
                                            selectSuggestion(item)
                                        }

                                    >

                                        {item}

                                    </div>


                                ))
                            }


                        </div>

                    )
                }


            </div>





            {/* Links */}

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


            </div>


        </nav>

    );

}


export default Navbar;