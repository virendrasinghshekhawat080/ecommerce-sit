
import { NavLink } from "react-router-dom";
import "./CategoryBar.css";

function CategoryBar() {

    const categories = [
        "electronics",
        "jewelery",
        "men's clothing",
        "women's clothing"
    ];

    return (

        <div className="category-container">

            {
                categories.map((cat) => (

                    <NavLink
                        key={cat}
                        to={`/products?category=${cat}`}
                        className="category-link"
                    >
                        {cat}
                    </NavLink>

                ))
            }

        </div>

    );
}

export default CategoryBar;