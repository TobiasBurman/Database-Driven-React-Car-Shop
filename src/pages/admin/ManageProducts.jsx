import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";



const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");


  // anropar produkter
  const fetchProducts = async () => {
    try {
      const response = await fetch(
        "https://product-api-production-0e9a.up.railway.app/products"
      );
      const productsData = await response.json();
      setProducts(productsData);
    } catch (error) {
      console.error(error);
      setError("An error occurred while fetching the data");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);


  // tar bort produkt från API'et med delete
  const handleDelete = async (productId) => {
    try {
      const response = await fetch(
        `https://product-api-production-0e9a.up.railway.app/products/${productId}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        setProducts((prevProducts) =>
          prevProducts.filter((product) => product._id !== productId)
        );
      }
    } catch (error) {
      console.error(error);
      setError("An error occurred while deleting the product");
    }
  };

  return (
    <>
      <Link to="/pages/admin/CreateProduct">Create Product</Link>
      
      {error && <p>{error}</p>}
      {products.length > 0 ? (
        <table className="adminTable">
          <thead>
            <tr>
              <td><b>Titel</b> </td>
              <td><b>Beskrivning</b></td>
              <td><b>Pris</b></td>
              <td><b>Antal</b></td>
              <td><b>Datum</b></td>
              <td><b>Kategori</b></td>
              <td><b>Bild</b></td>
              <td><b>Uppdatera</b></td>
        
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
                <td><img src={product.image} width ="120" height ="80" /></td>
                <td>
                <button onClick={() => window.location.href=`/pages/admin/UpdateProduct?id=${product._id}`}>
                    Uppdatera
                  </button>
                  <button className="btn-delete" onClick={() => handleDelete(product._id)}>
                    Radera
                  </button>
                </td>
            
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