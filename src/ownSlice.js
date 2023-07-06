import {createSlice} from "@reduxjs/toolkit";
    

export const ownSlice =   createSlice({
    name : "own",
    initialState:   {value
    :{cart:0}},
   reducers:{
    login:(state,action)=>{
        state.value = action.payload;

    },
    logout:(state,action)=>{
        state.value = action.payload;

    },

     

   },

});
export const {login,logout} = ownSlice.actions;
export default ownSlice.reducer;