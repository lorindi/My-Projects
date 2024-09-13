import { useState } from "react";
import "./SearchBar.scss";
import { Link } from "react-router-dom";

const types = ["buy", "rent"];

function SearchBar() {
  const [query, setQuery] = useState({
    type: "buy",
    city: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const switchType = (val) => {
    setQuery((prev) => ({ ...prev, type: val }));
  };

  const handleChange = (e) => {
    setQuery((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const buildUrl = () => {
    let url = `/list?type=${query.type}&city=${query.city}`;
    if (query.minPrice > 0) {
      url += `&minPrice=${query.minPrice}`;
    }
    if (query.maxPrice > 0) {
      url += `&maxPrice=${query.maxPrice}`;
    }
    return url;
  };

  return (
    <div className="searchBar">
      <div className="type">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => switchType(type)}
            className={query.type === type ? "active" : ""}
          >
            {type}
          </button>
        ))}
      </div>
      <form>
        <input
          type="text"
          name="city"
          placeholder="City"
          onChange={handleChange}
        />
        <input
          type="number"
          name="minPrice"
          min={0}
          max={0}
          placeholder="Min Price"
          onChange={handleChange}
        />
        <input
          type="number"
          name="maxPrice"
          min={0}
          max={0}
          placeholder="Max Price"
          onChange={handleChange}
        />
        <Link
          to={buildUrl() }
        >
          <button>
            <img src="/search.png" alt="" />
          </button>
        </Link>
      </form>
    </div>
  );
}

export default SearchBar;
