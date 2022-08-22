import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
  totalAmount: 0,
  itemPrice: 0,
  totalQuantity: 0,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state = initialState, action) => {
      const updatedTotalAmount =
        state.totalAmount + action.payload.enterItemPrice
      // console.log(action.payload);

      /**
       * total quantity
       */
      const updatedTotalQuantity =
        state.totalQuantity +
        (action.payload.enterAmountNum - action.payload.enterAmountNum + 1)

      const exitingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.newItem.id
      )

      let updatedItems

      let exitingItem = state.items[exitingItemIndex]

      if (exitingItem) {
        const updatedItem = {
          ...exitingItem,
          amount: exitingItem.amount + 1,
        }
        updatedItems = [...state.items]

        updatedItems[exitingItemIndex] = updatedItem
      } else {
        updatedItems = state.items.concat(action.payload.newItem)
      }
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
        totalQuantity: updatedTotalQuantity,
      }
    },

    /**
     *
     * @param {目前購物車的狀態} state
     * @param {payload 傳入目前購物車的狀態、} action
     * @returns 減法，更新後的 items 陣列、數量、以及總金額
     */
    decreaseCartItem: (state, action) => {
      let updatedItems
      /**
       * 拿 commodity 的 data 來與目前存在於 cart 的 data 比對
       */
      const exitingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.newItem.id
      )

      let exitingItem = state.items[exitingItemIndex]
      /**
       * total Amount 為什麼 state.totalAmount 在減最後一次的時候不會變動??
       */

      let updatedTotalAmount = state.totalAmount - exitingItem.price

      console.log(exitingItem.price)
      console.log(state.totalAmount)
      // console.log(action.payload.enterItemPrice);
      console.log(updatedTotalAmount)
      /**
       * total quantity
       */
      const updatedTotalQuantity =
        state.totalQuantity -
        (action.payload.enterAmountNum - action.payload.enterAmountNum + 1)

      if (exitingItem.amount > 1) {
        const updatedItem = {
          ...exitingItem,
          amount: exitingItem.amount - 1,
        }
        updatedItems = [...state.items]
        updatedItems[exitingItemIndex] = updatedItem
      } else {
        return
      }
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
        totalQuantity: updatedTotalQuantity,
      }
    },

    /**
     * 不論數量，刪除購物車中特定商品，總價格也會隨之減少，完整邏輯。
     * @param {目前購物車的狀態} state
     * @param {按下 trash button 時用 dataset 比對出的 id} action
     */
    removeItemFromCart: (state, action) => {
      const id = action.payload
      const deleteItemIndex = state.items.findIndex((item) => {
        return item.id === id
      })
      const itemAmount = state.items[deleteItemIndex].amount
      const updatedTotalQuantity = state.totalQuantity - itemAmount
      const itemPrice = state.items[deleteItemIndex].price
      const updatedTotalAmount = state.totalAmount - itemPrice * itemAmount

      state.items.splice(deleteItemIndex, 1)
      state.totalQuantity = updatedTotalQuantity
      state.totalAmount = updatedTotalAmount
    },
    clearItem() {
      return initialState
    },
  },
})

export const { addToCart, removeItemFromCart, clearItem, decreaseCartItem } =
  cartSlice.actions

export default cartSlice.reducer

/*************************************************/
