import React, { useState, useEffect } from 'react';
import Nav from '../../components/Nav';

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://product-api-production-0e9a.up.railway.app/products');
      const productsData = await response.json();
      setProducts(productsData);
    } catch (error) {
      console.error(error);
      setError('An error occurred while fetching the data');
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
    <Nav />
      {error && <p>{error}</p>}
      {products.length > 0 ? (
        <table>
          <thead>
          <tr>
            <td>Titel</td>
            <td>Beskrivning</td>
            <td>Pris</td>
            <td>Antal</td>
            <td>Datum</td>
            <td>Kategori</td>
            <td>Bild</td> 
            </tr>
          </thead>
          <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>{product.title}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
              <td>{product.stock}</td>
              <td>{product.date}</td>
              <td>{product.category}</td>
              <td>{product.image}</td>
            </tr>
          ))}
          </tbody>
        </table>
      ) : (
        <p>No products found</p>
      )}
    </>
  );
};

export default ManageProducts;