import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  points: 13,
}
export const bonusSlice = createSlice({
  name: 'bonus',
  initialState,
  reducers: {
    increment: (state) => {
      // console.log(state)
      console.log(state.points)
      state.points += 1
    },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
})
// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = bonusSlice.actions

export default bonusSlice.reducer