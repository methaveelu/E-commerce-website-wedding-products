import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
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
          <h1 className="text-[20px]">Your order is being processed!</h1>
        ) : data?.status === "Transferred to delivery partner" ? (
          <h1 className="text-[20px]">
            Your order has been transferred to our delivery partner!
          </h1>
        ) : data?.status === "Shipping" ? (
          <h1 className="text-[20px]">
            Your order is being delivered to your city by our delivery partner!
          </h1>
        ) : data?.status === "Received" ? (
          <h1 className="text-[20px]">
            Your order has arrived in your city and our delivery partner has
            received it!
          </h1>
        ) : data?.status === "On the way" ? (
          <h1 className="text-[20px]">Our delivery partner is on the way!</h1>
        ) : data?.status === "Delivered" ? (
          <h1 className="text-[20px]">Your order has been delivered!</h1>
        ) : data?.status === "Processing refund" ? (
          <h1 className="text-[20px]">Your refund is being processed!</h1>
        ) : data?.status === "Refund Successful" ? (
          <h1 className="text-[20px]">Your refund is successful!</h1>
        ) : null}
      </>
    </div>
  );
};

export default TrackOrder;