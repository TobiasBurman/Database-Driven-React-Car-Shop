import React from 'react'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { useOutletContext } from "react-router-dom";
import Product from '../components/Product';
const Products = () => {

  const [cartItems, setCartItems] = useOutletContext();
  const [carResponse, setCarResponse] = useState("")
  const [error, setError] = useState('');

  const getCars = async () => {
    try {
  
      const response =  await fetch(
        `https://product-api-production-0e9a.up.railway.app/products`
      );
     const carApi= await response.json();
     
      setCarResponse(carApi)
      
    } catch (error) {
      console.log(error);
      setError("An error occurred while fetching the data");
    }
  };
  
  useEffect(() => {
    getCars();
  }, []);


  const handleBuy = (car) => {
    setCartItems([...cartItems, car]);
  }
 
   
  return (
    <div >
      {carResponse.length
        ? carResponse.map((car) => (
            <div key={car._id }>
              <Product car = {car}/>
              <br />
              <Link to={`/pages/ProductPage?id=${car._id}`}>Product</Link>
             
              <button onClick={() => handleBuy(car)}>Köp</button>
              </div>
          ))
        : "Movie List is empty"}
    </div>
  );
};
 

export default Products;