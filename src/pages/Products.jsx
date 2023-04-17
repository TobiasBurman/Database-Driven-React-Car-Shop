import React from 'react'

const Products = (props) => {
  
    console.log(props.carResponse)
  return (
    <div >
      {props.carResponse.length
        ? props.carResponse.map((car) => (
            <div key={car._id }>
              <p>{car.title}</p>
              <p>{car.description}</p>
              <p>{car.price}</p>
              <p>{car.date}</p>
              <p>{car.category}</p>
              <p><img src={car.image} alt="car" width="350" height="250" /></p>
              <br />
            </div>
          ))
        : "Movie List is empty"}

        
    </div>
  );
};
 

export default Products;