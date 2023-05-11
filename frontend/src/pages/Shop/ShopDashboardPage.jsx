import React from "react";
import ShopDashboardBackdrop from "../../components/Shop/Layout/ShopDashboardBackdrop";
import ShopDashboardHeader from "../../components/Shop/Layout/ShopDashboardHeader";
import ShopDashboardSidebar from "../../components/Shop/Layout/ShopDashboardSidebar";

const ShopDashboardPage = () => {
  return (
    <div>
      <ShopDashboardHeader />
      <div className="flex items-start justify-between w-full">
        <div className="w-[80px] 800px:w-[330px]">
          <ShopDashboardSidebar active={1} />
        </div>
        <ShopDashboardBackdrop />
      </div>
    </div>
  );
};

export default ShopDashboardPage;