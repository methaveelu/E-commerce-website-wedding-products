import React from "react";
import AllEvents from "../../components/Shop/AllEvents";
import ShopDashboardHeader from "../../components/Shop/Layout/ShopDashboardHeader";
import ShopDashboardSidebar from "../../components/Shop/Layout/ShopDashboardSidebar";

const ShopAllEvents = () => {
  return (
    <div>
      <ShopDashboardHeader />
      <div className="flex justify-between w-full">
        <div className="w-[80px] 800px:w-[330px]">
          <ShopDashboardSidebar active={5} />
        </div>
        <div className="w-full justify-center flex">
          <AllEvents />
        </div>
      </div>
    </div>
  );
};

export default ShopAllEvents;