import React, { useState } from 'react';
import Nav from './Nav';
import Cart from './Cart';
import styles from './Header.module.css'

const Header = ({ cartItems, handleRemoveItem, handleRemoveAll }) => {
  const [showCart, setShowCart] = useState(false);
  
  const handleCartClick = () => {
    setShowCart(!showCart);
  };

  return (
    <>
    <header className={styles.header}>
      <Nav cartItems={cartItems} onCartClick={handleCartClick} />
      {showCart && <Cart cartItems={cartItems} handleRemoveItem={handleRemoveItem} handleRemoveAll={handleRemoveAll} />}
      </header>
    </>
  );
};

export default Header;
