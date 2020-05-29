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
    <section className='list-home'>
      <h2 className='list-home__title'>MODA FEMININA</h2>

      <ul className='list-home__items'>
        {products.loading ? (<Loading />) : (products.data.map((item) => (
          <Link to={`/product/${item.id}`}>
            <li key={item.id} className='item'>
              <div className='item__box-image'>
                {item.image 
                  ? <img className='item__image' src={item.image} alt={item.name} /> 
                  : <img className='item__image' src='https://via.placeholder.com/470x594/FFFFFF/?text=Imagem+Indisponível' alt={item.name} />
                }
                {item.on_sale ? <div className='item__sale'>{item.discount_percentage} off</div> : null}
                <button className='item__btn-see'>Ver produto</button>
              </div>

              <div className='item__info'>
                <h3 className='item__name'>{item.name}</h3>
                {item.on_sale && <label className='item__price--sale'>{item.regular_price}</label>}
                <strong className='item__price'>{item.actual_price}</strong> 
              </div>
              
            </li>
          </Link>
        )))}
      </ul>
    </section>
  );
};