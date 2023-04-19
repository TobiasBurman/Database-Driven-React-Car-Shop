import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Nav.module.css';
import { useOutletContext } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Nav = ({ onCartClick, cartItems }) => {

  return (
    <div className={styles.nav}>
      <Link to="pages/admin/ManageProducts">Admin</Link>
      <br />
      <Link to="/pages/Products">Home</Link>
      <br />
      <div className={styles.pointer} onClick={onCartClick}><ShoppingCartIcon />({cartItems.length})</div>
    </div>
  );
};

export default Nav;