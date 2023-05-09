import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllOrdersOfUser } from "../../redux/actions/orderActions";

const TrackOrder = () => {
  const { orders } = useSelector((state) => state.order);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(getAllOrdersOfUser(user._id));
  }, [dispatch]);

  const data = orders && orders.find((item) => item._id === id);

  return (
    <div className="w-full h-[80vh] flex justify-center items-center">
      {" "}
      <>
        {data && data?.status === "Processing" ? (
          <h1 className="text-[20px]">Your order is being processed.</h1>
        ) : data?.status === "Transferred to delivery partner" ? (
          <h1 className="text-[20px]">
            Your order is on the way to the delivery partner.
          </h1>
        ) : data?.status === "Shipping" ? (
          <h1 className="text-[20px]">
            Your order is on the way with our delivery partner.
          </h1>
        ) : data?.status === "Received" ? (
          <h1 className="text-[20px]">
            Your order is in your city. Our delivery partner will deliver it.
          </h1>
        ) : data?.status === "On the way" ? (
          <h1 className="text-[20px]">
            Our delivery partner is going to deliver your order.
          </h1>
        ) : data?.status === "Delivered" ? (
          <h1 className="text-[20px]">Your order has been delivered.</h1>
        ) : data?.status === "Processing refund" ? (
          <h1 className="text-[20px]">Your refund is being processed.</h1>
        ) : data?.status === "Refund Success" ? (
          <h1 className="text-[20px]">Your refund has been processed successfully.</h1>
        ) : null}
      </>
    </div>
  );
};

export default TrackOrder;