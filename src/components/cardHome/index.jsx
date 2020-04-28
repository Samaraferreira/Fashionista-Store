import React from 'react';

import './styles.css';

export default function CardHome({ products }) {
  return (
    <section className='card-home-container'>
      <ul className='card-home-list'>
        {products.map(item => (
          <li>
            <img src={item.image} alt='Foto do produto' />
            
            <div className='card-home-info'>
              <h3>{item.name}</h3>
              {item.on_sale && <label>{item.regular_price}</label>}
              <span>{item.actual_price}</span> 
            </div>
            
            <div className='card-home-list-buttons'>
              <button>
                Ver produto
              </button>
              <button>
                Comprar
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};