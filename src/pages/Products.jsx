import React from 'react'
import { Link } from 'react-router-dom';
import Product from '../components/Product';
const Products = (props) => {
  
    console.log(props.carResponse)
  return (
    <div >
      {props.carResponse.length
        ? props.carResponse.map((car) => (
            <div key={car._id }>
              <Product car = {car}/>
              <br />
              <button onClick={() => window.location.href=`/pages/ProductPage?id=${car._id}`}>
                    Product
              </button>
              </div>
          ))
        : "Movie List is empty"}
      
        
    </div>
  );
};
 

export default Products;