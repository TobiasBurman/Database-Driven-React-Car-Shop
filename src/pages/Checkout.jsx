import React from 'react';
import { useOutletContext } from 'react-router-dom';

const Checkout = () => {
  const [cartItems, setCartItems] = useOutletContext();

  const handleQuantityChange = (id, action, e) => {
    e.preventDefault()
    const index = cartItems.findIndex((item) => item._id === id);
  
    if (index !== -1) {
      const updatedCartItems = cartItems.map((item) => {
        if (!item.quantity) {
          return { ...item, quantity: 1 };
        }
        return item;
      });
  
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

  // group identical items and display the total quantity of each item
  const groupedItems = cartItems.reduce((acc, item) => {
    if (acc[item._id]) {
      acc[item._id].quantity++;
    } else {
      acc[item._id] = { ...item, quantity: 1 };
    }
    return acc;
  }, {});

  return (
    <div>
      <form className='checkOut'>
        {Object.values(groupedItems).map((item) => (
          <div key={item._id}>
            <p>
              <img src={item.image} alt="car" width="100" height="60" />  {item.title} - {item.price} - ({item.quantity})
            </p>
            <button onClick={(e) => handleQuantityChange(item._id, 'decrease',e)}>-</button>
            <input type="text" value={item.quantity} onChange={() => {}} />
            <button onClick={(e) => handleQuantityChange(item._id, 'increase',e)}>+</button>
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
      <div>
        <p>Total: {Object.values(groupedItems).reduce((total, item) => total + (item.price * item.quantity), 0)}</p>
      </div>
    </div>
  );
};

export default Checkout;
