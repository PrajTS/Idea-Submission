import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

// Define the initial state using that type
const initialState: string = ''

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      const username = action.payload
      sessionStorage.setItem('username', username)
      return username
    },
    checkLogin: (state, action: PayloadAction) => {
      const username = sessionStorage.getItem('username') || ''
      return username
    }
  },
})

export const { setUsername, checkLogin } = userSlice.actions

export const user = (state: RootState) => state.user

export default userSlice.reducer
