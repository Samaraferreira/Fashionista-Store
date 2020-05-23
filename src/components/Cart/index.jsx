import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { BsBagFill } from 'react-icons/bs';

import './styles.css';

import CartItem from './CartItem';
import Button from './CartButton';

import CountTotalPrice from '../../utils/countPrice';

const _selectedProducts = [
  {
    "quantitySelected": 2,
    "sizeSelected": "P",
    "colorSelected": "Blue",
    "name": "VESTIDO TRANSPASSE BOW",
    "style": "20002605",
    "code_color": "20002605_613",
    "color_slug": "tapecaria",
    "color": "TAPEÇARIA",
    "on_sale": false,
    "regular_price": "R$ 199,90",
    "actual_price": "R$ 199,90",
    "discount_percentage": "",
    "installments": "3x R$ 66,63",
    "image": "https://d3l7rqep7l31az.cloudfront.net/images/products/20002605_615_catalog_1.jpg?1460136912",
    "sizes": [
      {
        "available": false,
        "size": "PP",
        "sku": "5807_343_0_PP"
      },
      {
        "available": true,
        "size": "P",
        "sku": "5807_343_0_P"
      },
      {
        "available": true,
        "size": "M",
        "sku": "5807_343_0_M"
      },
      {
        "available": true,
        "size": "G",
        "sku": "5807_343_0_G"
      },
      {
        "available": false,
        "size": "GG",
        "sku": "5807_343_0_GG"
      }
    ]
  }
]

export default function Cart() {
  const [showCart, setShowCart] = useState(false);

  function openCart() {
    if(showCart){
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
          {_selectedProducts && <span>{_selectedProducts.length}</span>}
        </sup>
      </button>

      {showCart && (
        <div className='cart-container'>
          <div className='cart-header'>
            <button onClick={openCart}>
              <AiOutlineClose size={18} color='#fff' />
            </button>
            <h3> Sua sacola</h3>
          </div>

          <div className='cart-content'> 
            <ul className='cart-products'>
              {_selectedProducts.map((product, index) => (
                <CartItem key={index} product={product} index={index} />
              ))}
            </ul>

            <div className='cart-infos'>
              <div className='info-content'>
                <label>Subtotal</label>
                <label>R$ { CountTotalPrice(_selectedProducts) }</label>
              </div>

              <div className='info-content'>
                <label>Frete</label>
                <label>Grátis</label>
              </div>

              <div className='info-content'>
                <strong>Total</strong>
                <strong>R$ { CountTotalPrice(_selectedProducts) }</strong>
              </div>
                
              <button>
                Fechar pedido
              </button>
            </div>
          </div>
        </div>
      )}
      
    </section>
  )
}