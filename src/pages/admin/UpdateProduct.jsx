import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const EditProduct = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');

  let urlParams = new URLSearchParams(window.location.search)

  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://product-api-production-0e9a.up.railway.app/products/${urlParams.get('id')}`
        );
        if (!response.ok) {
          throw new Error('Could not fetch product data');
        }
        const product = await response.json();
        setTitle(product.title);
        setDescription(product.description);
        setPrice(product.price);
        setStock(product.stock);
        setCategory(product.category);
        setImage(product.image);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProduct();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `https://product-api-production-0e9a.up.railway.app/products/${urlParams.get('id')}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            title,
            description,
            price,
            stock,
            category,
            image,
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Could not update product');
      }

      window.location.href = '/pages/admin/ManageProducts';
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Link to="/pages/admin/ManageProducts">Admin</Link>
      <h1>Edit Product</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <br />
        <label>
          Description:
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
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
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </label>
        <br />
        <label>
          Image:
          <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
        </label>
        <br />
        <button type="submit">Update</button>
      </form>
    </>
  );
};

export default EditProduct;
