import React from "react";
import { Link } from "react-router-dom";
import { navItems } from "../../static/data";
import styles from "../../styles/styles";

const Navbar = ({ active }) => {
  return (
    <div className={`block lg:${styles.normalFlex} bg-pink-200`} key="navbar">

      {navItems &&
        navItems.map((i, index) => (
          <div className="flex" key={index}>
            <Link
              to={i.url}
              className={`text-blue-900 hover:text-gray-700 pb-3 lg:pb-0 font-bold text-lg px-6 cursor-pointer ${
                active === index + 1 ? "text-pink-500" : ""
              }`}
            >
              {i.title}
            </Link>
          </div>
        ))}
      <div className="flex" key={navItems.length + 1}>
        <Link
          to="/contact"
          className="text-blue-900 hover:text-gray-700 pb-3 800px:pb-0 font-bold text-lg px-6 cursor-pointer"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;