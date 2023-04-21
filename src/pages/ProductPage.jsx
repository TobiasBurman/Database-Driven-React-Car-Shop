import React from 'react'
import { useState, useEffect } from 'react'
import { useOutletContext } from "react-router-dom";

const ProductPage = () => {
  const [cartItems, setCartItems] = useOutletContext(); // hook för cart
  const [carResponse, setCarResponse] = useState("") // hook för bil API
  let urlParams = new URLSearchParams(window.location.search)


    // hämtar bil efter specifikt id
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
  
    // uppdaterar carten vid köp
  const handleBuy = (car) => {
    setCartItems([...cartItems, car]);
  }

  return (
    <div className='productPage'>

      <div key={carResponse._id } >
              <p><img src={carResponse.image} alt="carResponse" width="350" height="250" /></p>
              <b>{carResponse.title}</b>
              <i>{carResponse.description}</i>
              <p>Pris: {carResponse.price}</p>
              <p>Lagersaldo: {carResponse.stock}</p>
              <p>Kategori: {carResponse.category}</p>
              <br />
              <button onClick={() => handleBuy(carResponse)}>Köp</button>
              </div>
    </div>
  )
}

export default ProductPage