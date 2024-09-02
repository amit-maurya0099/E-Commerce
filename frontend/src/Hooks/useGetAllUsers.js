import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addAllUsers } from "../Utils/appSlices/userSlice";


const useGetAllUsers=()=>{
  const dispatch=useDispatch();
    const getAllUser=async()=>{
        try {
            const response=await fetch("/api/user/details/all",{
                method:"GET"
            })
            console.log(response);
            const data=await response.json();
            console.log(data);
            if(response.ok){
                dispatch(addAllUsers(data.users))
            }
        } catch (error) {
            console.log(error);
        }
    }
useEffect(()=>{
    getAllUser();
},[])
}

export default useGetAllUsers;