import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import actionsCart from '../../store/actions/Cart';

import { AiOutlineCloseCircle } from 'react-icons/ai';

export default function CartItem({ product }) {
  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState(1)

  function increment() {
    setQuantity(() => quantity+1);
  }

  function decrement() {
    if(quantity === 1) {
      return
    }
    setQuantity(() => quantity-1);
  }

  function removeProduct(sku) {
    dispatch(actionsCart.removeProduct(sku))
  }

  return (
    <li className='cart-item'>
      <Link to={`/product/${product.id}`}>
        <img className='cart-item__image' src={product.image} />
      </Link>

      <div className='cart-item__infos'>
        <label className='cart-item__text'>{product.name}</label>
        <label className='cart-item__text'>Tamanho: {product.sizeSelected}</label>
        <label className='cart-item__text'>Unidade: {product.actual_price}</label>

        <div className='cart-item__quantity'>
          <button className='cart-item__btn-increment' onClick={increment}>+</button>
          <label className='cart-item__text'>{quantity}</label>
          <button className='cart-item__btn-decrement' onClick={decrement}>-</button>
        </div>
      </div>

      <button className='cart-item__btn-remove' 
        onClick={() => removeProduct(product.selectedSize)}
      >
        <AiOutlineCloseCircle size={24} color='#fff' />
      </button>
    </li>
  )
}