import {useDispatch} from "react-redux";
import { addItems } from "../utils/cardSlice";

const Menu = ({ data }) => {

  const dispatch = useDispatch()

  const handleAddItems = (item) => {
    // dispatch an action

    dispatch(addItems(item))

  }
  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-4">
      <ul>
        {data.map((item, index) => (
          <li
            key={index}
            className="flex justify-between items-center border-b last:border-b-0 py-3"
          >
            <div>
              <span className="block font-medium text-gray-800">{item.name}</span>
              <span className="text-sm text-gray-500">{item.price}</span>
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-3 py-1 rounded-md transition-colors" 
              onClick={() => handleAddItems(item)}
            >
              Add +
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
