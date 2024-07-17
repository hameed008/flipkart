import axios from "axios";
import * as actionType from '../constants/productConstant';
const URL = 'https://flipkart-server-0l7s.onrender.com';
export const getProducts = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${URL}/products`);
    dispatch({ type: actionType.GET_PRODUCTS_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: actionType.GET_PRODUCTS_FAIL, payload: error.message })
  }
}