import React from "react";
import ShopDashboardHeader from "../../components/Shop/Layout/ShopDashboardHeader";
import ShopDashboardMessages from "../../components/Shop/Layout/ShopDashboardMessages";
import ShopDashboardSidebar from "../../components/Shop/Layout/ShopDashboardSidebar";

const ShopInboxPage = () => {
  return (
    <div>
      <ShopDashboardHeader />
      <div className="flex items-start justify-between w-full">
        <div className="w-[80px] 800px:w-[330px]">
          <ShopDashboardSidebar active={8} />
        </div>
        <ShopDashboardMessages />
      </div>
    </div>
  );
};

export default ShopInboxPage;