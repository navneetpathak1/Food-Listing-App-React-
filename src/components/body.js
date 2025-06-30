import { useState } from "react";
import { restaurantList } from "../constant";
import ShimmerUI from "./Shimmer";
import { Link } from "react-router-dom";

// SearchBar Component
const SearchBar = ({ searchTab, setSearchTab, handleSearch }) => {
  return (
    <div>
      <input
        type="text"
        className="search-input"
        placeholder="Search restaurants..."
        value={searchTab}
        onChange={(e) => 
          setSearchTab(e.target.value)
        }
      />
      <button className="search-btn" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

// Restaurant Card Component
const RestaurantComponent = ({ name, cuisines, imageId, lastMileMin }) => {
  return (
    <div className="restaurant-card">
      <img src={imageId} alt={name} className="restaurant-image" />
      <h2 className="restaurant-name">{name}</h2>
      <h3 className="restaurant-cuisines">{cuisines.join(", ")}</h3>
      <h3 className="restaurant-time">{lastMileMin} mins</h3>
    </div>
  );
};

// Main Body Component
export const Body = () => {
  const [searchTab, setSearchTab] = useState("");
  const [restaurants, setRestaurants] = useState(restaurantList);

  const handleSearch = () => {
    const filtered = restaurantList.filter((res) =>
      res.data.name.toLowerCase().includes(searchTab.toLowerCase())
    );
    setRestaurants(filtered);
  };

  return restaurants.length === 0? (
    <ShimmerUI />
  ) : (
    <>
      <SearchBar
        searchTab={searchTab}
        setSearchTab={setSearchTab}
        handleSearch={handleSearch}
      />

      <div className="body">
        {restaurants.length > 0 ? (
          restaurants.map((restaurant) => (
            <Link to={"/restaurant/"+restaurant.data.id} key={restaurant.data.id}><RestaurantComponent
              {...restaurant.data}
            
            /></Link>
          ))
        ) : (
          <p>No restaurants found.</p>
        )}
      </div>
    </>
  );
};
