import React from "react";
import DashboardBackdrop from "../../components/Shop/DashboardBackdrop";
import DashboardHeader from "../../components/Shop/Layout/DashboardHeader";
import DashboardSidebar from "../../components/Shop/Layout/DashboardSidebar";

const ShopDashboardPage = () => {
  return (
    <div>
      <DashboardHeader />
      <div className="flex items-start justify-between w-full">
        <div className="w-[80px] 800px:w-[330px]">
          <DashboardSidebar active={1} />
        </div>
        <DashboardBackdrop />
      </div>
    </div>
  );
};

export default ShopDashboardPage;