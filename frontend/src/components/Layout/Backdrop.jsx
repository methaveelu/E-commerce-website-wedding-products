import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/styles";

const Backdrop = () => {
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.normalFlex}`}
    >
      <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
        <h1
          className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#3d3a3a] font-[Great Vibes] capitalize`}
        >
          Best Collection for <br /> wedding Essentials
        </h1>
        <p className="pt-5 text-[16px] font-[Parisienne] font-[400] text-[#7b7b7b]">
          blah blah blah
        </p>
        <Link to="/products" className="inline-block">
          <div className={`${styles.button} mt-5 bg-[#e0c8c8]`}>
            <span className="text-[#ffffff] font-[Poppins] text-[18px]">
              Shop Now
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Backdrop;
