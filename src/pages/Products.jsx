import React from 'react'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { useOutletContext } from "react-router-dom";
import Product from '../components/Product';
const Products = () => {

  const [cartItems, setCartItems] = useOutletContext(); // hook för cart
  const [carResponse, setCarResponse] = useState("")  // hook för bil API
  const [error, setError] = useState('');   // hook för error

  // anropar APIet
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


  // uppdaterar carten vid köp
  const handleBuy = (car) => {
    setCartItems([...cartItems, car]);
  }
 
   
  return (
    <div className='product-container'>
      {carResponse.length
        ? carResponse.map((car) => (
          <div className ="product"key={car._id }>
              <Product car = {car}/>
              <br />
              <button onClick={() => handleBuy(car)}>Köp</button>
              </div>
          ))
        : "List is empty"}
    </div>
  );
};
 

export default Products;