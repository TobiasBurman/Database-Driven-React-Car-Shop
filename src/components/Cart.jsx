import React from "react";
import styles from './Cart.module.css'
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const Cart = ({ cartItems, handleRemoveItem, handleRemoveAll }) => {
  const cartItemCount = cartItems.length;
  const groupedItems = cartItems.reduce((acc, item) => {
    if (acc[item.imdbID]) {
      acc[item.imdbID].count++;
    } else {
      acc[item.imdbID] = { ...item, count: 1 };
    }
    return acc;
  }, {});
  console.log(cartItems)

  const totalAmount = Object.values(groupedItems).reduce((acc, item)=> acc+item.price * item.count,0);

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  }
  
  return (
    <>
      <motion.ul className={styles.cartContainer}
        animate={{
          y: 10,
        }}
        variants={variants}
      >
        {cartItemCount > 0 ? (
          Object.values(groupedItems).map((item) => (
            
              <motion.li className={styles.cartList} key={item.imdbID} animate={{y: 10}}>
                <img src={item.Poster} alt="car" width="150" height="100" /> {item.Title} 100 SEK - ({item.count})
                <button onClick={() => handleRemoveItem(item.imdbID)}>Remove</button>
              </motion.li>
           
           ))
           ) : (
             <p className={styles.cartList}>Your cart is empty</p>
             )}
             <p className={styles.cartTotal}>Total: {totalAmount}SEK </p>
                
            <button className={styles.cartTotal} onClick={() => handleRemoveAll()}>Remove All</button>
            <Link className={styles.cartList} to="/pages/Checkout">Checkout</Link>
                
      </motion.ul>
    </> 
  );
};
export default Cart;
