import React from 'react';
import { useOutletContext } from 'react-router-dom';


const Checkout = () => {
  const [cartItems] = useOutletContext();

  return (
    <div>
      <form className='checkOut'>
        {cartItems.map((item) => (
          
          <div key={item._id}>
              <p><img src={item.image} alt="car" width="100" height="60" />  {item.title} - {item.price}</p>
  
            </div>
        ))}
      </form>
      <form className='checkOutForm'>
      <label>
        Name:
        <input type="text"  />
      </label>
      <br />
      <label>
        Address:
        <input type="text" />
      </label>
      <br />
      <label>
        City:
        <input type="text"  />
      </label>
      <br />
      <label>
        State:
        <input type="text"  />
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