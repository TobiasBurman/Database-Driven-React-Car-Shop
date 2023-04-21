import React, {useEffect} from 'react';
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

  useEffect( () => {
    setCartItems(
      cartItems.reduce((acc, item) => {
          const object = acc.find((o) => o._id === item._id)
          if (!object) {
              acc.push({...item, quantity: 1});
          } else {

              object.quantity++;
          }
          return acc;
      }, [])
    )
  }, [])

  // const groupedItems = cartItems.reduce((acc, item) => {
  //   if (acc[item._id]) {
  //     acc[item._id].quantity++;
  //   } else {
  //     acc[item._id] = { ...item, quantity: 1 };
  //   }
  //   return acc;
  // }, {});

  return (
    <div>
      <form className='checkOut'>
        {cartItems.map((item) => (
          <table key={item._id} className='checkOut'>
            <tr></tr>
            <th>Vara</th>
            <th>Namn</th>
            <th>Pris</th>
            <th>Kvantitet</th>
            <th>Ändra Kvantitet</th>
            <tr>
              <td><img src={item.image} alt="car" width="100" height="60" /> </td>
             <td>{item.title}</td> <td>{item.price}</td> <td><input type="text" value={item.quantity} onChange={() => {}} className='checkOutNr'/></td> 
             <td>
            <button onClick={(e) => handleQuantityChange(item._id, 'decrease',e)}>-</button>
            <button onClick={(e) => handleQuantityChange(item._id, 'increase',e)}>+</button>
            </td>
            </tr>
       
          </table>
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
        <p>Total: {cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)}</p>
      </div>
    </div>
  );
};

export default Checkout;
