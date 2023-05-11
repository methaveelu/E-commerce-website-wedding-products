import React from "react";
import ShopSettings from "../../components/Shop/ShopSettings";
import ShopDashboardHeader from "../../components/Shop/Layout/ShopDashboardHeader";
import ShopDashboardSidebar from "../../components/Shop/Layout/ShopDashboardSidebar";

const ShopSettingsPage = () => {
  return (
    <div>
      <ShopDashboardHeader />
      <div className="flex items-start justify-between w-full">
        <div className="w-[80px] 800px:w-[330px]">
          <ShopDashboardSidebar active={11} />
        </div>
        <ShopSettings />
      </div>
    </div>
  );
};

export default ShopSettingsPage;