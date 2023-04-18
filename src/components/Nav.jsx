import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Nav.module.css';


const Nav = ({ onCartClick, cartItems }) => {
  const cartItemCount = cartItems.length;


  return (
    <div className={styles.nav}>
      <Link to="pages/admin/ManageProducts">Admin</Link>
      <br />
      <Link to="/">Home</Link>
      <br />
      <div onClick={onCartClick}>Cart({cartItemCount})</div>
    </div>
  );
};

export default Nav;