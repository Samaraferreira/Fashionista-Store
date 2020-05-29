import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BsArrowLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import actionsCart from '../../store/actions/Cart';
import ProductImage from '../../components/ProductImage';
import './styles.css'

export default function SingleProduct({ product }) {
  const dispatch = useDispatch();
  const [selectedSize, setSelectedSize] = useState('')
  const sizeError = useSelector(state => state.cartReducer.error)

  function onClickSize(event, sku) {
    event.preventDefault();
    dispatch(actionsCart.selectSize())
    setSelectedSize(sku);
  }

  function onClickAdd(product) {
    const item = { ...product, selectedSize: selectedSize, quantity: 1 }
    if(selectedSize === '')
      dispatch(actionsCart.addProductFailure())
    else
      dispatch(actionsCart.addProduct(item))
  }

  return (
    <div className='product-container'>
      <ProductImage url={product.image} />
      
      <div className='product-group'>
        <div className='product-info'>
          <h3 className='product-name'>{product.name}</h3>

          <div className='product-price'>
            {product.on_sale && 
              <label className='price-regular'>{product.regular_price}</label>
            }
            <strong className='price-actual'>{product.actual_price}</strong> 
            <br/>
            <label className='price-installments'>Em até {product.installments}</label>
          </div>

          <div className='product-size'>
            {product.sizes
              .filter(item => item.available === true)
              .map(size => (
                <button 
                  key={size.sku}
                  className={`product-size-button ${selectedSize === size.sku ? 'selected-size' : ''}`}
                  onClick={(event) => onClickSize(event, size.sku)}
                >
                  {size.size}
                </button>
              )
            )}
            {sizeError && <p style={{ color: 'red' }}>Selecione um tamanho</p>}
          </div>
        </div>

        <button className='btn-submit' onClick={() => onClickAdd(product)}>
          Adicionar à Sacola
        </button>

        <Link to='/' className='link-back'>
          <BsArrowLeft size={24} />
          Voltar para a home
        </Link>
      </div>
    </div>
  )
}