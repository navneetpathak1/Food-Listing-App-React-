import { useContext, useState } from "react";
import { restaurantList } from "../constant";
import ShimmerUI from "./Shimmer";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
// import { WithPromoted } from "./Restaurant";`

// SearchBar Component
const SearchBar = ({ searchTab, setSearchTab, handleSearch }) => {
  return (
    <div className="flex items-center justify-center gap-4 my-8">
      <input
        type="text"
        className="w-64 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Search restaurants..."
        value={searchTab}
        onChange={(e) => setSearchTab(e.target.value)}
      />
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export const WithPromoted = (RestaurantComponent) => {
  return (props) => {
    return (
      <div className="relative">
        <label
          className="absolute top-2 left-2 bg-yellow-400 text-xs text-black font-semibold px-2 py-1 rounded shadow"
        >
          PROMOTED
        </label>
        <RestaurantComponent {...props} />
      </div>
    );
  };
};


// Restaurant Card Component
const RestaurantComponent = ({ name, cuisines, imageId, lastMileMin }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-4">
      <img
        src={imageId}
        alt={name}
        className="w-full h-48 object-cover rounded-md"
      />
      <h2 className="mt-4 text-xl font-semibold text-gray-800">{name}</h2>
      <h3 className="text-gray-600">{cuisines.join(", ")}</h3>
      <h3 className="text-gray-500">{lastMileMin} mins</h3>
    </div>
  );
};

// Main Body Component
export const Body = () => {
  const [searchTab, setSearchTab] = useState("");
  const [restaurants, setRestaurants] = useState(restaurantList);
  const {loggedInUser, setUserName} = useContext(UserContext)

  // Create the HOC component
  const PromotedRestaurantCard = WithPromoted(RestaurantComponent);

  const handleSearch = () => {
    const filtered = restaurantList.filter((res) =>
      res.data.name.toLowerCase().includes(searchTab.toLowerCase())
    );
    setRestaurants(filtered);
  };

  return restaurants.length === 0 ? (
    <ShimmerUI />
  ) : (
    <>
      <SearchBar
        searchTab={searchTab}
        setSearchTab={setSearchTab}
        handleSearch={handleSearch}
      />

      <div className="relative my-6 flex items-center gap-3">
        <label className="text-sm font-medium text-gray-700">Set User Name:</label>
        <input
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm w-64"
          value={loggedInUser}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          placeholder="Enter your name"
        />
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 pb-10">
        {restaurants.length > 0 ? (
          restaurants.map((restaurant) => {
            // For example, decide whether a restaurant is promoted
            const isPromoted = restaurant.data.promoted;

            const CardComponent = isPromoted
              ? PromotedRestaurantCard
              : RestaurantComponent;

            return (
              <Link
                to={"/restaurant/" + restaurant.data.id}
                key={restaurant.data.id}
              >
                <CardComponent {...restaurant.data} />
              </Link>
            );
          })
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No restaurants found.
          </p>
        )}
      </div>
    </>
  );
};
