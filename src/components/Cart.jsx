import React from "react";
import styles from './Cart.module.css'

const Cart = ({ cartItems }) => {
  const cartItemCount = cartItems.length;
  const groupedItems = cartItems.reduce((acc, item) => {
    if (acc[item._id]) {
      acc[item._id].count++;
    } else {
      acc[item._id] = { ...item, count: 1 };
    }
    return acc;
  }, {});

  const totalAmount = Object.values(groupedItems).reduce((acc, item)=> acc+item.price * item.count,0);

  return (
    <>
      <ul className={styles.cartContainer}>
        {cartItemCount > 0 ? (
          Object.values(groupedItems).map((item) => (
            
              <li className={styles.cartList} key={item._id}>
                <img src={item.image} alt="car" width="150" height="100" /> {item.title} {item.price} - ({item.count})
              </li>
           
           ))
           ) : (
             <p>Your cart is empty</p>
             )}
             <p className={styles.cartTotal}>Total: {totalAmount}SEK</p>
      </ul>
    </> 
  );
};
export default Cart;
