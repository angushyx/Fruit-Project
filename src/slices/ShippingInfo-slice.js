import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userInfos: [],
  isEditModal: false,
  isShippingPage: false,
}

export const ShippingSlice = createSlice({
  name: 'ShippingInfo',
  initialState,
  reducers: {
    addNewUserInfo: (state, action) => {
      const newUserInfo = action.payload.values
      return { userInfos: newUserInfo }
    },
    changePageView: (state, action) => {
      if (action.payload === '/review/checkout') {
        state.isShippingPage = true
      } else {
        state.isShippingPage = false
      }
    },
  },
})

export const { addNewUserInfo, changePageView } = ShippingSlice.actions

export default ShippingSlice.reducer
