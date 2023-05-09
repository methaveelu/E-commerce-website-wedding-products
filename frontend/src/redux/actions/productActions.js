import axios from "axios";
import { server } from "../../server";

// create product
export const createProduct = (newForm) => async (dispatch) => {
  try {
    dispatch({
      type: "product/createRequest",
    });

    const config = { headers: { "Content-Type": "multipart/form-data" } };

    const { data } = await axios.post(
      `${server}/product/create-product`,
      newForm,
      config
    );
    dispatch({
      type: "product/createSuccess",
      payload: data.product,
    });
  } catch (error) {
    dispatch({
      type: "product/createFail",
      payload: error.response.data.message,
    });
  }
};

// get All Products of a shop
export const getAllProductsShop = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "product/getAllShopProductsRequest",
    });

    const { data } = await axios.get(
      `${server}/product/get-all-products-shop/${id}`
    );
    dispatch({
      type: "product/getAllShopProductsSuccess",
      payload: data.products,
    });
  } catch (error) {
    dispatch({
      type: "product/getAllShopProductsFailed",
      payload: error.response.data.message,
    });
  }
};

// delete product of a shop
export const deleteProduct = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "product/deleteRequest",
    });

    const { data } = await axios.delete(
      `${server}/product/delete-shop-product/${id}`,
      {
        withCredentials: true,
      }
    );

    dispatch({
      type: "product/deleteSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "product/deleteFailed",
      payload: error.response.data.message,
    });
  }
};

// get all products
export const getAllProducts = () => async (dispatch) => {
  try {
    dispatch({
      type: "product/getAllProductsRequest",
    });

    const { data } = await axios.get(`${server}/product/get-all-products`);
    dispatch({
      type: "product/getAllProductsSuccess",
      payload: data.products,
    });
  } catch (error) {
    dispatch({
      type: "product/getAllProductsFailed",
      payload: error.response.data.message,
    });
  }
};