import React from 'react';

import './styles.css';

export default function Banner() {
  return (
    <section className='banner'>
      <div className='banner__description'>
        <h1 className='banner__title'>Promoção</h1>
        <label className='banner__text'>mais de 50% off</label>
      </div>
    </section>
  );
};