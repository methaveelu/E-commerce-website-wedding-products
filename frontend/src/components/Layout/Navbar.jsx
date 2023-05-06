import React from "react";
import { Link } from "react-router-dom";
import { navItems } from "../../static/data";
import styles from "../../styles/styles";

const Navbar = ({ active }) => {
  return (
    <div className={`${styles.normalFlex} bg-pink-200`} key="navbar">

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
      </div>
  );
};

export default Navbar;