import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles";

const Backdrop = () => {
  return (
    <div className="relative w-full">
      <div
        className="absolute inset-0 z-[-1] bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://www.monti.sg/wp-content/uploads/2022/11/Monti-258-1.jpg)",
          height: "100%",
        }}
      />
      <div
        className={`relative min-h-screen w-full bg-no-repeat bg-center ${styles.normalFlex}`}
        style={{
          position: "relative",
        }}
      >
        <div
          className="relative flex flex-col backdrop-blur-sm items-center justify-center h-full px-4 text-center"
        >
          <h1
            className={`text-3xl md:text-5xl text-[#553555] font-semibold uppercase tracking-wide mb-10`}
          >
            The Best Collection of Wedding-Related Products!
          </h1>
          <p className="text-lg md:text-xl text-[#332f36] mb-10 bg-opacity-80">
            Discover a wide range of elegant and exquisite products to make your wedding day truly memorable.
          </p>
          <Link to="/products" className="inline-block">
            <div className={`${styles.button} mt-5`}>
              <span className="text-white font-semibold text-lg uppercase tracking-wide">
                Shop Now
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Backdrop;