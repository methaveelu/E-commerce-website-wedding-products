import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/styles";

const DropDown = ({ categoriesData, setDropDown }) => {
  const navigate = useNavigate();
  const submitHandle = (i) => {
    navigate(`/products?category=${i.title}`);
    setDropDown(false);
    window.location.reload();
  };
  return (
    <div>
      <div className="pb-4 w-[270px] bg-[#fbe4d3] absolute z-30 rounded-md shadow-lg border-black">
        {categoriesData &&
          categoriesData.map((i, index) => (
            <div
              key={index}
              className={`${styles.normalFlex} items-center px-4 py-2 cursor-pointer hover:bg-pink-300`}
              onClick={() => submitHandle(i)}
            >
              <div className="w-6 h-6 mr-2">
                <img
                  src={i.image_Url}
                  style={{ width: "100%", height: "100%", objectFit: "contain" }}
                  alt=""
                />
              </div>
              <h3 className="text-lg font-bold select-none">{i.title}</h3>
            </div>
          ))}
      </div>
    </div>
  );
};

export default DropDown;