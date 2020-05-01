import React from 'react';

import image from '../../assets/background.jpg';
import medium from '../../assets/medium.jpg';

import './styles.css';

export default function Slide() {
  return (
    <section className='slide-container'>
      <img src={image} />
      <div className='slide-promo'>
        Promoção    até 50% off
      </div>
    </section>
  );
};