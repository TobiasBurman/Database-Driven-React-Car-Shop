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

  return (
    <>
      <h2>Cart ({cartItemCount})</h2>
      <ul className={styles.cartContainer}>
        {cartItemCount > 0 ? (
          Object.values(groupedItems).map((item) => (
            <li className={styles.cartList} key={item._id}>
              {item.title} {item.price} - ({item.count})
            </li>
          ))
        ) : (
          <p>Your cart is empty</p>
        )}
      </ul>
    </>
  );
};
export default Cart;
