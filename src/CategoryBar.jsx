
import { NavLink } from "react-router-dom";
import "./categoryBar.css";

function CategoryBar() {

    const categories = [
        "electronics",
        "jewelery",
        "men's clothing",
        "women's clothing"
    ];

    return (
        <div className="shop-category-bar">

            {categories.map((cat) => (
                <NavLink
                    key={cat}
                    to={`/products?category=${encodeURIComponent(cat)}`}
                    className="shop-category-link"
                >
                    {cat}
                </NavLink>
            ))}

        </div>
    );
}

export default CategoryBar;