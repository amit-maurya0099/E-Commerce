import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { addUserDetail, setLoading } from "../Utils/appSlices/userSlice";

const useGetUserDetails=(id)=>{
    const dispatch=useDispatch();
    const getUserDetail=async()=>{
        try {
            dispatch(setLoading(true))
            const response=await fetch(`/api/user/details/${id}`,{
                method:"GET"
            })
            console.log(response)
            const data=await response.json();
            console.log(data);
            if(response.ok){

             dispatch(addUserDetail(data.user));
            }
            dispatch(setLoading(false));
            
        } catch (error) {
            dispatch(setLoading(false));
            console.log(error)
        }

    }
    useEffect(()=>{
        getUserDetail();
    },[])

}

export default useGetUserDetails;