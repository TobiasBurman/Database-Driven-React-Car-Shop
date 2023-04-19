import React from "react";
import styles from './Cart.module.css'
import { Link } from 'react-router-dom';


const Cart = ({ cartItems, handleRemoveItem, handleRemoveAll }) => {
  const cartItemCount = cartItems.length;
  const groupedItems = cartItems.reduce((acc, item) => {
    if (acc[item._id]) {
      acc[item._id].count++;
    } else {
      acc[item._id] = { ...item, count: 1 };
    }
    return acc;
  }, {});
  console.log(cartItems)

  const totalAmount = Object.values(groupedItems).reduce((acc, item)=> acc+item.price * item.count,0);


  return (
    <>
      <ul className={styles.cartContainer}>
        {cartItemCount > 0 ? (
          Object.values(groupedItems).map((item) => (
            
              <li className={styles.cartList} key={item._id}>
                <img src={item.image} alt="car" width="150" height="100" /> {item.title} {item.price} - ({item.count})
                <button onClick={() => handleRemoveItem(item._id)}>Remove</button>
              </li>
           
           ))
           ) : (
             <p className={styles.cartList}>Your cart is empty</p>
             )}
             <p className={styles.cartTotal}>Total: {totalAmount}SEK </p>
                <span>
                  <button className={styles.cartTotal} onClick={() => handleRemoveAll()}>Remove All</button>
                  <Link to="/pages/Checkout">Checkout</Link>
                </span>
      </ul>
    </> 
  );
};
export default Cart;
