import {createSlice} from "@reduxjs/toolkit";
    

export const ownSlice =   createSlice({
    name : "own",
    initialState:   {value
    :{cart:0}},
   reducers:{
    login:(state,action)=>{
        state.value = action.payload;

    },

    logout :(state)=>{
        state.value = {name:"",age:0,emai:""};

    }

   },

});
export const {login ,logout} = ownSlice.actions;
export default ownSlice.reducer;