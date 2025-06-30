import { useParams } from "react-router-dom";
import { restaurantData } from "./menuData";
import "../../index.css"

const Restaurant = () => {
  const { restId } = useParams();

  const restaurant = restaurantData.restaurants.find((r) => r.id === restId);

  if (!restaurant) {
    return <p className="not-found">Restaurant not found.</p>;
  }

  return (
    <div className="restaurant-container">
      <h1 className="restaurant-title">{restaurant.name}</h1>
      <p className="restaurant-cuisines">
        <strong>Cuisines:</strong> {restaurant.cuisines.join(", ")}
      </p>
      <p className="restaurant-price">
        <strong>Price for Two:</strong> {restaurant.priceForTwo}
      </p>
      <h2 className="menu-heading">Menu</h2>
      <ul className="menu-list">
        {restaurant.menuItems.map((item, index) => (
          <li key={index} className="menu-item">
            <span>{item.name}</span>
            <span className="menu-price">{item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Restaurant;
