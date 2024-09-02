import React, { useEffect } from "react";
import ProductCard from "../Utils/ProductCard";
import MetaData from "../Utils/MetaData";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "react-material-ui-carousel";
import CategorySection from "./CategorySection";
import { addAllProducts } from "../Utils/appSlices/productSlice";
import Cookies from "js-cookie";
import { setIsAuthenticated } from "../Utils/appSlices/userSlice";
import Footer from "./Footer";



const Home = () => {
  
  const dispatch = useDispatch();
  const products = useSelector((store) => store.products.allProducts);
  const isAuthenticated=useSelector((store)=>store.users.isAuthenticated)

  const fetchProducts = async () => {
    
    const response = await fetch("https://e-commerce-0ti2.onrender.com/api/v1/products");
    console.log(response);
    const data = await response.json();
    console.log(data);
    dispatch(addAllProducts(data.products));
    
  };
  const getProfileData = async () => {
   
    try {
      const response = await fetch("https://e-commerce-0ti2.onrender.com/api/user/profile/details", {
        method: "GET",
      });
      
      const data = await response.json();
     
      localStorage.setItem("user",JSON.stringify(data));
        
    } catch (error) {
      
      console.log(error);
    }
  };

  const token = Cookies.get("token");
  if (token) {
    dispatch(setIsAuthenticated(true));
    
  }
  if(isAuthenticated){
    getProfileData();
  }

 

  useEffect(() => {
    fetchProducts();
   

  }, []);

  return (
    <>
      <MetaData title="Home- Ecommerce" />

    
      <div className="w-full h-auto  text-black py-2 pb-8">
        <div>
          <Carousel className="h-full">
            <img
              src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/b229a95edd3af8bd.jpg?q=20"
              alt="/"
            ></img>
            <img
              src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/dff6511cbf3c625e.jpg?q=20"
              alt="/"
            ></img>
          </Carousel>
        </div>
        <CategorySection />
        <div>
          <h1 className="font-bold text-3xl text-center text-purple-600 underline m-5">
            Featured Products
          </h1>
        </div>

        <div className="flex gap-20 flex-wrap justify-center ">
          {products.map((product) => (
            <div key={product._id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
      <Footer/>

    </>
  );
};

export default Home;
