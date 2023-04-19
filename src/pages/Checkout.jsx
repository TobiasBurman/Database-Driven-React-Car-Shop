import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useOutletContext } from 'react-router-dom';
import Product from '../components/Product';

const Checkout = () => {
  const [cartItems] = useOutletContext();
  const [carResponse, setCarResponse] = useState([]);
  const [formItems, setFormItems] = useState([]);







  return (
    <div>
      <form >
        {cartItems.map((item) => (
          
          <div key={item._id}>
              <p>{item.title}</p>
              <p>{item.description}</p>
              <p>{item.price}</p>
              <p>{item.date}</p>
              <p>{item.category}</p>
              <p><img src={item.image} alt="car" width="200" height="120" /></p>
              <br />
            </div>
        ))}
 
     
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Checkout;