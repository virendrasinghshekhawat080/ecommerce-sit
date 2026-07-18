
import { useState } from "react";

function Sidebar({ setSort, setPriceRange, setRating }) {

    const [min, setMin] = useState("");
    const [max, setMax] = useState("");
    const [activeSort, setActiveSort] = useState("");
    const [activeRating, setActiveRating] = useState(0);

    // 🔥 Apply Price Filter
    const applyPrice = () => {
        setPriceRange([min, max]);
    };

    // 🔥 Reset Filters
    const clearFilters = () => {
        setMin("");
        setMax("");
        setActiveSort("");
        setActiveRating(0);
        setSort("");
        setPriceRange([0, 1000]);
        setRating(0);
    };

    return (
        <div className="sidebar">

            <h3>🧩 Filters</h3>

            {/* 🔥 SORT */}
            <h4>Sort By</h4>

            <button
                className={activeSort === "low" ? "active" : ""}
                onClick={() => {
                    setSort("low");
                    setActiveSort("low");
                }}
            >
                🔽 Price: Low → High
            </button>

            <button
                className={activeSort === "high" ? "active" : ""}
                onClick={() => {
                    setSort("high");
                    setActiveSort("high");
                }}
            >
                🔼 Price: High → Low
            </button>

            {/* 🔥 PRICE */}
            <h4>Price Range</h4>

            <input
                type="number"
                placeholder="Min Price"
                value={min}
                onChange={(e) => setMin(e.target.value)}
            />

            <input
                type="number"
                placeholder="Max Price"
                value={max}
                onChange={(e) => setMax(e.target.value)}
            />

            <button className="apply-btn" onClick={applyPrice}>
                Apply Price
            </button>

            {/* 🔥 RATING */}
            <h4>Rating</h4>

            <button
                className={activeRating === 4 ? "active" : ""}
                onClick={() => {
                    setRating(4);
                    setActiveRating(4);
                }}
            >
                ⭐⭐⭐⭐ & above
            </button>

            <button
                className={activeRating === 3 ? "active" : ""}
                onClick={() => {
                    setRating(3);
                    setActiveRating(3);
                }}
            >
                ⭐⭐⭐ & above
            </button>

            {/* 🔥 CLEAR */}
            <button className="clear-btn" onClick={clearFilters}>
                ❌ Clear Filters
            </button>

        </div>
    );
}

export default Sidebar;