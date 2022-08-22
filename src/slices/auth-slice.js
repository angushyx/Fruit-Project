import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  googleUserData: {},
  userData: {},
  token: '',
  isLoggedIn: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    auth: (state, action) => {
      const newGoogleUserData = action?.payload
      localStorage.setItem('profile', JSON.stringify({ ...action?.payload }))
      return {
        googleUserData: newGoogleUserData,
      }
    },
  },
})

export const { auth } = authSlice.actions
export default authSlice.reducer
