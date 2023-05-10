import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Backdrop = () => {
  return (
    <div className="relative w-full">
      <div
        className="absolute inset-0 z-[-1] bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://www.monti.sg/wp-content/uploads/2022/11/Monti-258-1.jpg)",
        }}
      />
      <div
        className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.normalFlex}`}
        style={{
          position: "relative",
        }}
      >
        <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
          <h1
            className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[black] font-[600] capitalize`}
          >
            The best collection of wedding-related products!
          </h1>
          <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#000000ba]">
            blah blah blah blah
          </p>
          <Link to="/products" className="inline-block">
            <div className={`${styles.button} mt-5`}>
              <span className="text-[black] font-[Poppins] text-[25px]">
                Shop Now
              </span>
            </div>
          </Link>
        </div>
      </div>
      <div
        className="absolute inset-0 z-[-1] bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://www.monti.sg/wp-content/uploads/2022/11/Monti-258-1.jpg)",
          filter: "blur(5px)",
        }}
      />
    </div>
  );
};

export default Backdrop;