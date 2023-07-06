import {createSlice} from "@reduxjs/toolkit";

export const CartUpdateSlice =   createSlice({
    name : "CartUpdate",
    initialState:   {value
    :{cart:([])}},
   reducers:{
    logout:(state,action)=>{
        state.value = action.payload;

    },

    
   }
   

});
export const {logout} = CartUpdateSlice.actions;
export default CartUpdateSlice.reducer;