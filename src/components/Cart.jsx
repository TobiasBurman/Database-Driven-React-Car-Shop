import React from "react";



const Cart = ({cartItems}) => {
  
  
  return (
    <>
      <h2>Cart</h2>
      <ul>

        {cartItems.cartItems.length ?
        cartItems.cartItems.map((car) => (
          <li key={car._id}>
            {car.title} - {car.price} 
          </li>
        ))
        : <p>Error</p>
      }
      </ul>
    </>
  );
};

export default Cart;
