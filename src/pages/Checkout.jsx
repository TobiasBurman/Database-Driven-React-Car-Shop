import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { useEffect, useState } from 'react';


const Checkout = () => {

  const [cartItems, setCartItems] = useOutletContext();

  

  const handleQuantityChange = (id, action) => {
    const index = cartItems.findIndex(item => item._id === id);
    console.log(item._id)
    if (index !== -1) {
      const updatedCartItems = [...cartItems];
      if (action === 'increase') {
        updatedCartItems[index].quantity++;
      } else if (action === 'decrease') {
        if (updatedCartItems[index].quantity > 1) {
          updatedCartItems[index].quantity--;
        } else {
          updatedCartItems.splice(index, 1);
        }
      }
      setCartItems(updatedCartItems);
    }
  };

  return (
    <div>
      <form className='checkOut'>
        {cartItems.map((item) => (
          <div key={item._id}>
            <p>
              <img src={item.image} alt="car" width="100" height="60" />  {item.title} - {item.price}
            </p>
            <button onClick={() => handleQuantityChange(item._id, 'increase')}>Increase quantity</button>
            <button onClick={() => handleQuantityChange(item._id, 'decrease')}>Decrease quantity</button>
          </div>
        ))}
      </form>
      <form className='checkOutForm'>
        <label>
          Name:
          <input type="text" />
        </label>
        <br />
        <label>
          Address:
          <input type="text" />
        </label>
        <br />
        <label>
          City:
          <input type="text" />
        </label>
        <br />
        <label>
          State:
          <input type="text" />
        </label>
        <br />
        <label>
          Zip:
          <input type="text" />
        </label>
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Checkout;