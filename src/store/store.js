import { configureStore } from '@reduxjs/toolkit'

import { combineReducers } from 'redux'
import userInfoReducer from '../slices/ShippingInfo-slice'

import cartReducer from '../slices/cart-slice'
import commodityReducer from '../slices/commodity-slice'
import authReducer from '../slices/auth-slice'
import categoryReducer from '../slices/category-slice'

const reducers = combineReducers({
  cartReducer,
  commodityReducer,
  authReducer,
  userInfoReducer,
  categoryReducer,
})

const store = configureStore({
  reducer: reducers,
  // middleware: (getDefaultMiddleware) => {
  //   return getDefaultMiddleware().concat(userApiService.middleware);
  // },
})

export default store
