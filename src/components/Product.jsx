import React from 'react'
import { Link } from 'react-router-dom'
Link
const Product = (props) => {

let car = props.car
  


  return (
    <div>
              <img className='product-img' src={car.image} alt="car" width="350" height="250" />
              <h3 className='product-title'>{car.title}</h3>     <Link to={`/pages/ProductPage?id=${car._id}`}><button className='product-btn'>Product</button></Link>

              <h5>{car.description}</h5>
              <h5>Pris: {car.price} SEK</h5>
              <h5>Uppladningsdatum: {car.date}</h5>
              <h5>Kategori: {car.category}</h5>
    </div>
  )
}

export default Product