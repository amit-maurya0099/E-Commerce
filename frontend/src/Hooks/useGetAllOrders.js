import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addAdminProducts } from "../Utils/appSlices/productSlice";
import { addAllOrders } from "../Utils/appSlices/orderSlice";


const useGetAllOrders=()=>{

    const dispatch=useDispatch();
    const getAllOrders=async()=>{
    
        try {
            const response=await fetch("/api/v1/order/all",{
                method:"GET"
            })
            console.log(response); 
            const data=await response.json();
            console.log(data);
              dispatch(addAllOrders(data.orders))
            
        } catch (error) {
           console.log(error);
        }
    
    }

    useEffect(()=>{
     getAllOrders();
    },[])

}
export default useGetAllOrders;