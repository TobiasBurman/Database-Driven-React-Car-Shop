import React from 'react'
import { Link } from 'react-router-dom'
Link
const Product = (props) => {

let car = props.car
  


  return (
    <div>
              <img className='product-img' src={car.image} alt="car" width="350" height="250" />
              <span className='top-product'><h3 className='product-title'>{car.title}</h3>     <Link to={`/pages/ProductPage?id=${car._id}`}><button className='product-btn'>Product</button></Link></span>

              <h5>Beskrivning: {car.description}</h5>
              <h5>{car.price}</h5>
              <h5>{car.date}</h5>
              <h5>{car.category}</h5>
    </div>
  )
}

export default Product