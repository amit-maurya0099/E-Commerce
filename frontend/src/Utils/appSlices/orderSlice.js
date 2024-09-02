import { createSlice } from "@reduxjs/toolkit";

const orderSlice=createSlice({
    name:"orders",
    initialState:{
        allOrders:[]

    },
    reducers:{
        addAllOrders:(state,action)=>{
            state.allOrders=action.payload
        },
        removeOrder:(state,action)=>{
            state.allOrders=state.allOrders.filter((item)=>item._id !== action.payload);
        }

    }
})
  export const {addAllOrders,removeOrder}=orderSlice.actions
export default orderSlice.reducer; 