import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addAdminProducts } from "../Utils/appSlices/productSlice";


const useGetAdminProducts=()=>{

    const dispatch=useDispatch();
    const getAdminProducts=async()=>{
    
        try {
            const response=await fetch("/api/v1/admin/products",{
                method:"GET"
            })
            console.log(response); 
            const data=await response.json();
            console.log(data);
             dispatch(addAdminProducts(data.products))
            
        } catch (error) {
           console.log(error);
        }
    
    }

    useEffect(()=>{
     getAdminProducts();
    },[dispatch])

}
export default useGetAdminProducts;