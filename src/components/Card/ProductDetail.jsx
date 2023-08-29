import React from 'react'
import { NavLink } from 'react-router-dom'


const ProductDetail = (product) => {
    return (
    <div>
        <div className='card mb-3' style={{maxWidth: '540px'}}>
            <img src={product.product.img} className='card-img-top' alt='...' style={{maxWidth:"500px", height: '300px'}}/>
            <div className='card-body'>
                <h5 className='card-title'>{product.product.title}</h5>
                <p className="card-text">{product.product.detail}</p>
                <button className='btn btn-primary'>Agregar al carrito</button>
                <button className='btn btn-secondary' style={{marginLeft: "3px"}}>
                    <NavLink to={`/products/${product.product.id}`}>Ver más</NavLink>
                </button>
        </div>
    </div>
    </div>
  )
}

export default ProductDetail