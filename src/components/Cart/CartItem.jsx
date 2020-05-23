import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { AiOutlineCloseCircle } from 'react-icons/ai';

export default function CartItem({ product, index }) {
  const [quantity, setQuantity] = useState(1);

  function more() {
    setQuantity(() => quantity+1);
  }

  function less() {
    if(quantity === 1) {
      return
    }
    setQuantity(() => quantity-1);
  }

  function remove() {
    
  }

  return (
    <li className='product-content'>
      <Link to={`/product/${index}`}>
        <img src={product.image} />
      </Link>

      <div className='product-text'>
        <label>{product.name}</label>
        <label>Tamanho: {product.sizeSelected}</label>
        <label>Unidade: {product.actual_price}</label>

        <div className='product-quantity'>
          <button onClick={more}>+</button>
            <label>{quantity}</label>
          <button onClick={less}>-</button>
        </div>
      </div>

      

      <button className='product-remove'>
        <AiOutlineCloseCircle size={24} color='#fff' />
      </button>
    </li>
  )
}