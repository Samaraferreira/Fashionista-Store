import React from 'react';

import './styles.css';
import Photo from '../../assets/photo.jpg';

export default function Product() {
  return (
    <section className='product-container'>
      <img src={Photo} alt='Foto do produto' />

      <div className='product-info'>
        <h3>Blazer Oversized com Amarração</h3>
        <label>de R$ 279,99</label>
        <strong>por R$ 140,00</strong>
        
        <div className="product-colors">
          <label>Cor</label>
          <div>
            <button style={{ background: '#fff' }}></button>
            <button style={{ background: '#000' }}></button>
            <button style={{ background: '#f82868' }}></button>
          </div>
        </div>

        <div className="product-size">
          <label>Tamanho</label>
          <div>
            <button>P</button>
            <button>M</button>
            <button>G</button>
          </div>
        </div>

        <button type='submit'>Adicionar à Sacola</button>
      </div>
    </section>
  );
};