import "./SearchBar.scss";
import { useState } from "react";
function SearchBar() {
  const types = ["buy", "rent"];

  const [query, serQuery] = useState({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });
  const switchType = (val) => {
    serQuery((prev) => ({ ...prev, type: val }));
  };
  return (
    <div className="searchBar">
      <div className="type">
        {/* <button onClick={()=>switchType("buy")}>Buy</button> */}
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
      <form action="">
        <input type="text" name="location" placeholder="City Location" />
        <input
          type="number"
          name="minPrice"
          min={0}
          max={10000000}
          placeholder="Min Price"
        />
        <input
          type="number"
          name="maxPrice"
          min={0}
          max={10000000}
          placeholder="Max Price"
        />
          <button>
        <img src="/search.png" alt="" />
      </button>
      </form>
    
    </div>
  );
}

export default SearchBar;
