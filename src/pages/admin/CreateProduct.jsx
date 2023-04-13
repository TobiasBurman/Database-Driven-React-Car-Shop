import React, { useState } from 'react'
import { Link } from "react-router-dom";

const CreateProduct = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://product-api-production-0e9a.up.railway.app/products",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            title,
            description,
            price,
            stock,
            category,
            image
          })
        }
      );

      if (!response.ok) {
        throw new Error("Ingen produkt kunde skapas");
      }

      window.location.href = "/pages/admin/ManageProducts";
    } catch (error) {
      console.error(error);
     
    }
  };

  return (
    <>
    <Link to="/pages/admin/ManageProducts">Admin</Link>
      <h1>Create Product</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <br />
        <label>
          Description:
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <br />
        <label>
          Price:
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
        </label>
        <br />
        <label>
          Stock:
          <input type="number" value={stock} onChange={(e) => setStock(e.target.value)} />
        </label>
        <br />
        <label>
          Category:
          <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
        </label>
        <br />
        <label>
          Image:
          <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
        </label>
        <br />
        <button type="submit">Create</button>
      </form>
    </>
  );
};

export default CreateProduct;
