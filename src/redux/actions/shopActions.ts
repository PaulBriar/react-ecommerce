import { GET_SHOP_DATA, FETCH_SHOP_DATA_BEGIN, FETCH_SHOP_DATA_SUCCESS, FETCH_SHOP_DATA_FAILURE } from "../constants"
import client from '../../api/config'

const BASE_URL = process.env.REACT_APP_SHOP_DATA_ENDPOINT_URL

export const getShopData = () => ({
  type: GET_SHOP_DATA
});

export const fetchShopDataBegin = () => ({
  type: FETCH_SHOP_DATA_BEGIN
})

export const fetchShopDataSuccess = (shopData: any) => ({
  type: FETCH_SHOP_DATA_SUCCESS,
  shopData
})

export const fetchShopDataFailure = (error: any) => ({
  type: FETCH_SHOP_DATA_FAILURE,
  error
})

export default function fetchShopData() {
  return async (dispatch: any) => {
    try {
      dispatch(fetchShopDataBegin())
      let response = await client.get(BASE_URL);
      dispatch(fetchShopDataSuccess(response.data))
    } catch (error) {
      dispatch(fetchShopDataFailure(error))
    }
  }
}