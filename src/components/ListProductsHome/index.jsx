import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import actions from '../../store/actions/Products';

import Loading from '../Loading';
import './styles.css';

export default function ListProductsHome() {
  const dispatch = useDispatch()
  const products = useSelector(state => state.productsReducer);

  useEffect(() => {
    dispatch(actions.getProducts())
  }, [])

  return (
    <section className='list-home-container'>
      <h2>MODA FEMININA</h2>
      <ul className='list-home-list'>
        {products.loading ? (<Loading />) : (products.data.map((item) => (
          <Link to={`/product/${item.id}`}>
            <li key={item.id}>
              <div className='list-home-image'>
                {item.image 
                  ? <img src={item.image} alt={item.name} /> 
                  : <img src='https://via.placeholder.com/470x594/FFFFFF/?text=Imagem+Indisponível' alt={item.name} />
                }
                {item.on_sale ? <div className='list-home-sale'>{item.discount_percentage} off</div> : null}
                <button>Ver produto</button>
              </div>

              <div className='list-home-info'>
                <h3>{item.name}</h3>
                {item.on_sale && <label>{item.regular_price}</label>}
                <span>{item.actual_price}</span> 
              </div>
              
            </li>
          </Link>
        )))}
      </ul>
    </section>
  );
};