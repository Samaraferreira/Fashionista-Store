import React from 'react';

import './styles.css';

export default function Slide() {
  return (
    <>
      <section className='slide-container'>
        <div className='slide-text'>
          <h1>Promoção</h1>
          <span>até 50% off</span>
          <button>Aproveitar</button>
        </div>
      </section>
      <div className='slide-info'>
        FRETE GRÁTIS  
      </div>
    </>
  );
};