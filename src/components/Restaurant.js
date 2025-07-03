import { useParams } from "react-router-dom";
import { restaurantData } from "./menuData";
import useOnlineStatus from "../utils/useOnlineStatus";

const Restaurant = () => {
  const { restId } = useParams();
  const restaurant = restaurantData.restaurants.find((r) => r.id === restId);
  const isOnline = useOnlineStatus();

  if (isOnline === false) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-lg text-red-500 font-semibold">
          Please check your internet connection.
        </p>
      </div>
    );
  }

  if (!restaurant) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-lg text-gray-500 font-semibold">
          Restaurant not found.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6 mt-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">
        {restaurant.name}
      </h1>
      <p className="text-gray-600 mb-1">
        <strong className="text-gray-700">Cuisines:</strong>{" "}
        {restaurant.cuisines.join(", ")}
      </p>
      <p className="text-gray-600 mb-4">
        <strong className="text-gray-700">Price for Two:</strong>{" "}
        {restaurant.priceForTwo}
      </p>

      <h2 className="text-2xl font-semibold text-gray-700 mb-3">Menu</h2>
      <ul className="divide-y divide-gray-200">
        {restaurant.menuItems.map((item, index) => (
          <li
            key={index}
            className="flex justify-between py-2 text-gray-700 hover:bg-gray-50 rounded"
          >
            <span>{item.name}</span>
            <span className="font-medium text-gray-900">{item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Restaurant;
