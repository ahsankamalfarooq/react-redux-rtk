import { createAction, createSlice } from '@reduxjs/toolkit'

const initialState = {
  points: 13,
}

const incrementByAmount = createAction('account/incrementByAmount')

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

  //EXTRA REDUCER HELP TO CONNECT OTHER FILE REDUCERS INTO ANOTHER FILE
  extraReducers: (builder) => {
    builder
    .addCase(incrementByAmount, (state, action) =>{
      if(action.payload >=100) {
        state.points+= 1;
      } 
      // else{
      
      // }
    })
  }

})
// Action creators are generated for each case reducer function
export const { increment, decrement } = bonusSlice.actions

export default bonusSlice.reducer