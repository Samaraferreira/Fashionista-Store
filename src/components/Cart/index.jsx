import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { AiOutlineClose } from 'react-icons/ai';
import { BsBagFill } from 'react-icons/bs';

import actionsCart from '../../store/actions/Cart';

import './styles.css';

import CartItem from './CartItem';
import Button from './CartButton';

import CountTotalPrice from '../../utils/countPrice';

export default function Cart() {
  const dispatch = useDispatch()
  const [showCart, setShowCart] = useState(false);
  const cartItems = useSelector(state => state.cartReducer.items)
  const cartCounter = useSelector(state => state.cartReducer.counter)

  useEffect(() => {
    dispatch(actionsCart.getCart())
  }, [])

  function openCart() {
    if(showCart) {
      setShowCart(false);
    } else {
      setShowCart(true)
    }
  }

  return (
    <section>
      <button className='cart-icon' onClick={openCart}>
        <BsBagFill size={24} />
        <sup>
          {<span>{cartCounter}</span>}
        </sup>
      </button>

      {showCart && (
        <div className='cart-container'>
          <div className='cart-header'>
            <button onClick={openCart}>
              <AiOutlineClose size={18} color='#fff' />
            </button>
            <h3>Sua sacola</h3>
          </div>

          <div className='cart-content'> 
            <ul className='cart-products'>
              {cartCounter > 0 ? 
                cartItems.map((product) => (
                  <CartItem key={product.id} product={product} />
                ))
                : <p>Sacola Vazia</p>
              }
            </ul>

            {/* <div className='cart-infos'>
              <div className='info-content'>
                <label>Subtotal</label>
                <label>R$ { CountTotalPrice(cartItems) }</label>
              </div>

              <div className='info-content'>
                <label>Frete</label>
                <label>Grátis</label>
              </div>

              <div className='info-content'>
                <strong>Total</strong>
                <strong>R$ { CountTotalPrice(cartItems) }</strong>
              </div>
                
              <button>
                Fechar pedido
              </button>
            </div> */}
          </div>
        </div>
      )}
      
    </section>
  )
}