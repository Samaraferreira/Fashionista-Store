import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import actionsCart from '../../store/actions/Cart';

import { AiOutlineCloseCircle } from 'react-icons/ai';

export default function CartItem({ product }) {
  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState(1)

  function more() {
    setQuantity(() => quantity+1);
  }

  function less() {
    if(quantity === 1) {
      return
    }
    setQuantity(() => quantity-1);
  }

  function removeProduct(id) {
    console.log('aa'+id);
    dispatch(actionsCart.removeProduct(id))
  }

  return (
    <li className='product-content'>
      <Link to={`/product/${product.id}`}>
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

      <button className='product-remove' onClick={() => removeProduct(product.id)}>
        <AiOutlineCloseCircle size={24} color='#fff' />
      </button>
    </li>
  )
}