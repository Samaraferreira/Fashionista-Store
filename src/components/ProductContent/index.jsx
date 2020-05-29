import React, { useEffect, useState } from 'react';

export default function ProductContent(product) {

  return (
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

        {cartError && <p style={{ color: 'red' }}>Selecione um tamanho</p>}
      </div>
    </div>
  )
}