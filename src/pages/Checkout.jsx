import React from 'react';
import { useOutletContext } from 'react-router-dom';


const Checkout = () => {
  const [cartItems] = useOutletContext();

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
      </form>
    </div>
  );
};

export default Checkout;