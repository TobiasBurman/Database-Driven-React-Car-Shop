import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useOutletContext } from 'react-router-dom';
import Product from '../components/Product';

const Checkout = () => {
  const [cartItems] = useOutletContext();
  const [carResponse, setCarResponse] = useState([]);
  const [formItems, setFormItems] = useState([]);

  const getCars = async () => {
    try {
      const response = await fetch(
        'https://product-api-production-0e9a.up.railway.app/products'
      );
      const carApi = await response.json();
      setCarResponse(carApi);
    } catch (error) {
      console.log(error);
      setError('An error occurred while fetching the data');
    }
  };

  useEffect(() => {
    getCars();
  }, []);

  const handleBuy = (car) => {
    setFormItems([...formItems, car]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formItems);
    // Add code here to submit the form data
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {cartItems.map((item) => (
          <input type="hidden" name="cartItem" value={item._id} key={item._id} />
        ))}
        {carResponse.length ? (
          carResponse.map((car) => (
            <div key={car._id}>
              <p>{car.title}</p>
              <p>{car.description}</p>
              <p>{car.price}</p>
              <p>{car.date}</p>
              <p>{car.category}</p>
              <p><img src={car.image} alt="car" width="200" height="120" /></p>
              <br />
            </div>
          ))
        ) : (
          <p>Movie List is empty</p>
        )}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Checkout;