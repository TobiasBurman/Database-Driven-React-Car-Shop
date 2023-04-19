import React from 'react'
import { useState, useEffect } from 'react'
import { useOutletContext } from "react-router-dom";

const ProductPage = () => {
  const [cartItems, setCartItems] = useOutletContext();
  const [carResponse, setCarResponse] = useState("")
  let urlParams = new URLSearchParams(window.location.search)

  const getCars = async () => {
    try {
      const response =  await fetch(
        `https://product-api-production-0e9a.up.railway.app/products/${urlParams.get('id')}`
      );
     const carApi= await response.json();
     
      setCarResponse(carApi)
      console.log(carResponse)
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
    <div>Productsdsdsada

<div key={carResponse._id }>
              <p>{carResponse.title}</p>
              <p>{carResponse.description}</p>
              <p>{carResponse.price}</p>
              <p>{carResponse.date}</p>
              <p>{carResponse.category}</p>
              <p><img src={carResponse.image} alt="carResponse" width="350" height="250" /></p>
              <br />
              <button onClick={() => handleBuy(carResponse)}>Köp</button>
              </div>
    </div>
  )
}

export default ProductPage