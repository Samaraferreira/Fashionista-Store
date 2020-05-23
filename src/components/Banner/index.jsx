import React from 'react';

import background from '../../assets/large.jpg';
import './styles.css';

export default function Banner() {
  return (
    <section className='banner-container'>
      <div className='banner-info'>
        <h1>Promoção</h1>
        <label>até 50% off</label>
        <button>Aproveitar</button>
      </div>
    </section>
  );
};