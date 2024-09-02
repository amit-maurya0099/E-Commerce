import { useDispatch } from "react-redux";
import { addProductDetails, setAllReviews } from "../Utils/appSlices/productSlice";
import { useEffect } from "react";
import { setLoading } from "../Utils/appSlices/userSlice";

const useProductDetails=(id)=>{
    const dispatch=useDispatch();
    const getProductDetail=async()=>{
        dispatch(setLoading(true))
        try {
            const response=await fetch(`/api/v1/product/details/${id}`,{
                method:"GET"
            })
            dispatch(setLoading(false))
            console.log(response);
            const data=await response.json();
            console.log(data);
            if(response.ok){
                dispatch(addProductDetails(data.product));
                dispatch(setAllReviews(data.product.reviews))
            }
            
        } catch (error) {
            dispatch(setLoading(false))
            console.log(error);
        }
    

    }
    useEffect(()=>{
        getProductDetail();
    },[])

}
export default useProductDetails;