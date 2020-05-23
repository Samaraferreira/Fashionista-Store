import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BsArrowLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import actionsProducts from '../../store/actions/Products';

import TopBar from '../../components/TopBar';
import ProductImage from '../../components/ProductImage';

import './styles.css';

export default function SingleProduct(props) {
  const dispatch = useDispatch();
  const [id,] = useState(parseInt(props.match.params.id))
  const products = useSelector(state => state.productsReducer.data)

  const [selectedSize, setselectedSize] = useState('');

  useEffect(() => {
    dispatch(actionsProducts.getProducts())
  }, [])

  function onClickSize(event, size) {
    event.preventDefault();
    setselectedSize(size)
  }

  function onClickAdd() {
    if(selectedSize === '')
      return <p>Selecione um tamanho</p>
  }

  return ( 
    <section>
      <TopBar />
      {products.map(product => product.id === id &&
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
                      className={`product-size-button ${selectedSize === size.size ? 'selected-size' : ''}`}
                      onClick={(event) => onClickSize(event, size.size)}
                    >
                      {size.size}
                    </button>
                  )
                )}
              </div>
            </div>

            <button className='btn-submit' type='submit' onClick={onClickAdd}>
              Adicionar à Sacola
            </button>

            <Link to='/' className='link-back'>
              <BsArrowLeft size={24} />
              Voltar para a home
            </Link>
          </div>
        </div>
      )}
    </section>
  );
};