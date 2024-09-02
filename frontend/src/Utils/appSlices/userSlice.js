import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
const userSlice=createSlice({
    name:"users",
    initialState:{
      isRegisterForm:false,
      user:localStorage.getItem("user")?JSON.parse(localStorage.getItem("user") ):"",
      isAuthenticated:Cookies.get("token")? true : false,
      loading:false,
      showProfileCard:false,
      showMenuCard:false,
      allUsers:[],
      userDetail:{}
    },
    reducers:{
        toggleSignUp:(state)=>{
            state.isRegisterForm=!state.isRegisterForm
        },
        addUser:(state,action)=>{
           state.user=action.payload
        },
        setIsAuthenticated:(state,action)=>{
            state.isAuthenticated=action.payload;
        },
        setLoading:(state,action)=>{
            state.loading=action.payload;
        },
        setShowProfileCard:(state,action)=>{
            state.showProfileCard=!state.showProfileCard
        },
        setShowMenuCard:(state,action)=>{
            state.showMenuCard=action.payload
        },
        addAllUsers:(state,action)=>{
            state.allUsers=action.payload
        },
        removeUser:(state,action)=>{
            state.allUsers=state.allUsers.filter((user)=> user._id !==action.payload)
        },
        addUserDetail:(state,action)=>{
            state.userDetail=action.payload;
        }
         
        

    }
})
export const {toggleSignUp,addUser,setIsAuthenticated,setLoading,setShowProfileCard,setShowMenuCard,addAllUsers,removeUser,addUserDetail}=userSlice.actions;
export default userSlice.reducer;
