import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../App.scss';
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'

const ProductComponent = () => {

const products = useSelector((state)=> state.allProducts.products)

const renderList = products.map((product)=>{
  return(
    <Link to={`/product/${product.id}`} className="card-link">
    <div className="card" key={product.id}>
        <img src={product.image} className="card-img-top mx-auto" alt={product.title}/>
        <div className="card-body">
          <p className="card-text">
          <h1>{product.title}</h1>
          $ {product.price} - {product.category}
          </p>
        </div>
    </div>
    </Link>
  )

})

  return (
    <div className="buy_list">
    {renderList}
    </div>
  )
}

export default ProductComponent
