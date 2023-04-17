import React from "react";



const Cart = ({cartItems}) => {
  
  console.log(cartItems.cartItems)
  return (
    <>
      <h2>Cart</h2>
      <ul>

        {
        cartItems.cartItems.map((car) => (
          <li key={car._id}>
            {car.title} - {car.price} 
          </li>
        ))
       
      }
      </ul>
    </>
  );
};

export default Cart;
