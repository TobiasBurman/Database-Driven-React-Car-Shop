
import { useState, useEffect } from 'react'


import { Outlet } from 'react-router-dom'
import Header from '../../components/Header';
import Footer from '../../components/Footer';



const Root = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const handleRemoveItem = (id) => {
    const index = cartItems.findIndex(item => item._id === id);
    if (index !== -1) {
      const updatedCartItems = [...cartItems];
      if (updatedCartItems[index].quantity > 1) {
        updatedCartItems[index].quantity--;
      } else {
        updatedCartItems.splice(index, 1);
      }
      setCartItems(updatedCartItems);
    }
  };

  const handleRemoveAll = () => {
    setCartItems([]);
  };


console.log(cartItems)

const handleShowCart = () => {
  setShowCart(!showCart);
}


  return (
    <div>
      
      <Header onCartClick={handleShowCart} cartItems={cartItems} handleRemoveItem={handleRemoveItem} handleRemoveAll={handleRemoveAll}/>
      
   
      
        <section>
            <Outlet  context={[cartItems, setCartItems]}/>
        </section>
        <Footer />
    </div>
  )
}

export default Root