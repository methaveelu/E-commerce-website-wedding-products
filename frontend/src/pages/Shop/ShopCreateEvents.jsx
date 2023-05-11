import React from "react";
import CreateEvent from "../../components/Shop/CreateEvent";
import ShopDashboardHeader from "../../components/Shop/Layout/ShopDashboardHeader";
import ShopDashboardSidebar from "../../components/Shop/Layout/ShopDashboardSidebar";

const ShopCreateEvents = () => {
  return (
    <div>
      <ShopDashboardHeader />
      <div className="flex items-center justify-between w-full">
        <div className="w-[330px]">
          <ShopDashboardSidebar active={6} />
        </div>
        <div className="w-full justify-center flex">
          <CreateEvent />
        </div>
      </div>
    </div>
  );
};

export default ShopCreateEvents;