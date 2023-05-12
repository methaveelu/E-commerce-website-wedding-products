import React from "react";
import { Link } from "react-router-dom";
import { navItems } from "../../staticData";
import styles from "../../styles";

const Navbar = ({ active }) => {
  return (
    <div className={`block 800px:${styles.normalFlex}`}>
      {navItems &&
        navItems.map((i, index) => (
          <div key={index} className="flex">
            <Link
              to={i.url}
              className={`${
                active === index + 1
                  ? "text-[#342b1d]"
                  : "text-black 800px:text-[#e7e2e2]"
              } pb-[30px] 800px:pb-0 font-[500] px-6 cursor-pointer}`}
            >
              {i.title}
            </Link>
          </div>
        ))}
    </div>
  );
};

export default Navbar;