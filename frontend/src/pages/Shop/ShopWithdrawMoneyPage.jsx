import React from "react";
import WithdrawMoney from "../../components/Shop/WithdrawMoney";
import ShopDashboardHeader from "../../components/Shop/Layout/ShopDashboardHeader";
import ShopDashboardSidebar from "../../components/Shop/Layout/ShopDashboardSidebar";

const ShopWithdrawMoneyPage = () => {
  return (
    <div>
      <ShopDashboardHeader />
      <div className="flex items-start justify-between w-full">
        <div className="w-[80px] 800px:w-[330px]">
          <ShopDashboardSidebar active={7} />
        </div>
        <WithdrawMoney />
      </div>
    </div>
  );
};

export default ShopWithdrawMoneyPage;
