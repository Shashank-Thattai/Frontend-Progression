/*import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: "counter",
    initialState:{
        value:0,
        vounter:10,
        name:"raj"
    } ,
    reducers:{
        increment: (state)=>{
            
        },
        decrement(state){

        },
        updateName(state){

        }


    }
});

export const {increment,decrement,updateName}

export default counterSlice.reducer*/

import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    counter:10,
    name:"raj"
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes.
      // Also, no return statement is required from these functions.
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    updateName: (state,action ) => {
        console.log(state)
        console.log(action)
        //console.log(payload)
        state.name =action.payload.name;
     
    },
  },
})





console.log(counterSlice)
// Action creators are generated for each case reducer function
export const { increment, decrement, updateName } = counterSlice.actions

export default counterSlice.reducer;


