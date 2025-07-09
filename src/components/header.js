import { useContext, useState } from "react";
import { LogoURL } from "../constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import UserContext from "../utils/UserContext.js";

export const Header = () => {
  const [logState, setLogState] = useState("Login");
  const isOnline = useOnlineStatus();

  const {loggedInUser} = useContext(UserContext);

  return (
    <div className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 shadow-lg">
      <Link to="/">
        <img
          src={LogoURL}
          alt="logo"
          className="w-16 h-16 rounded-full ring-2 ring-white hover:scale-105 transition-transform duration-300"
        />
      </Link>

      <ul className="flex items-center space-x-6 text-lg font-medium text-white">
        <li className="hover:text-green-200 transition-colors">
          Online: {isOnline ? "✅" : "❌"}
        </li>
        <li>
          <Link to="/" className="hover:text-yellow-300 transition-colors">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-yellow-300 transition-colors">
            Details
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-yellow-300 transition-colors">
            Contact Us
          </Link>
        </li>
        <li>
          <Link to="/card" className="hover:text-yellow-300 transition-colors">
            Card
          </Link>
        </li>
        <li>
          <Link to="/another" className="hover:text-yellow-300 transition-colors">
            Another Store
          </Link>
        </li>
        <li>
          <button
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded-md shadow-md transition-colors"
            onClick={() =>
              setLogState(logState === "Login" ? "Logout" : "Login")
            }
          >
            {logState}
          </button>
        </li>
        <li>{loggedInUser}</li>
      </ul>
    </div>
  );
};
