import React, { useState } from 'react';
import Nav from './Nav';
import Cart from './Cart';

const Header = ({ cartItems, handleRemoveItem }) => {
  const [showCart, setShowCart] = useState(false);
  
  const handleCartClick = () => {
    setShowCart(!showCart);
  };

  return (
    <>
      <Nav cartItems={cartItems} onCartClick={handleCartClick} />
      {showCart && <Cart cartItems={cartItems} handleRemoveItem={handleRemoveItem} />}
    </>
  );
};

export default Header;
