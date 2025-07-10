import { useDispatch, useSelector } from "react-redux";
import Menu from "./Menu";
import { clearItems } from "../utils/cardSlice";

const Card = () => {
  const cardItem = useSelector((store) => store.card.items);
  const dispatch = useDispatch();

  const handleClearCard = () => {
    dispatch(clearItems());
  };

  return (
    <div className="max-w-2xl mx-auto p-8 flex flex-col items-center">
      <h1 className="text-2xl font-semibold mb-6 text-center">Cart</h1>
      <button
        onClick={handleClearCard}
        className="mb-8 bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded transition-colors"
      >
        Clear Cart
      </button>
      {cardItem.length === 0 ? (
        <h1 className="text-lg text-gray-600">Your cart is empty</h1>
      ) : (
        <Menu data={cardItem} />
      )}
    </div>
  );
};

export default Card;
