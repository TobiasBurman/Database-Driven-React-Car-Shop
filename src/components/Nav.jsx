import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Nav.module.css';
import { useOutletContext } from "react-router-dom";

const Nav = ({ onCartClick }) => {


  const cartItemCount = 0;



  return (
    <div className={styles.nav}>
      <Link to="pages/admin/ManageProducts">Admin</Link>
      <br />
      <Link to="/pages/Products">Home</Link>
      <br />
      <div onClick={onCartClick}>Cart({cartItemCount})</div>
    </div>
  );
};

export default Nav;