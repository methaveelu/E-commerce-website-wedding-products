import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Backdrop = () => {
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.normalFlex}`}
      style={{
        backgroundImage:
          "url('https://www.monti.sg/wp-content/uploads/2022/11/Monti-258-1.jpg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div
        className={`${styles.section} w-[90%] 800px:w-[60%]`}
        style={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}
      >
        <h1
          className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#b7410e] font-great-vibes capitalize`}
          style={{
            fontFamily: "'Great Vibes', sans-serif",
            fontWeight: "bold",
          }}
        >
          Best Collection for <br /> Wedding Essentials
        </h1>
        <p
          className="pt-5 text-[16px] font-Quintessential font-medium text-[#4b5563]"
          style={{ fontFamily: "'Quintessential', sans-serif" }}
        >
          Make your special day unforgettable with our wedding collection!
        </p>
        <Link to="/products" className="inline-block">
          <div
            className={`${styles.button} mt-5 bg-pink-400`}
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            <span className="text-[#ffffff] text-lg font-medium">Shop Now</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Backdrop;