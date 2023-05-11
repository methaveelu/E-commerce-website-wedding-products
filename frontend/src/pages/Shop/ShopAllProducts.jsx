import React from "react";
import AllProducts from "../../components/Shop/AllProducts";
import ShopDashboardHeader from "../../components/Shop/Layout/ShopDashboardHeader";
import ShopDashboardSidebar from "../../components/Shop/Layout/ShopDashboardSidebar";

const ShopAllProducts = () => {
  return (
    <div>
      <ShopDashboardHeader />
      <div className="flex justify-between w-full">
        <div className="w-[80px] 800px:w-[330px]">
          <ShopDashboardSidebar active={3} />
        </div>
        <div className="w-full justify-center flex">
          <AllProducts />
        </div>
      </div>
    </div>
  );
};

export default ShopAllProducts;