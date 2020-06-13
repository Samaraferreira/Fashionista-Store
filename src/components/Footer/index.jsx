import React from 'react';
import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai';

import './styles.css';

export default function Footer() {
  return (
    <section className='footer'>
      <h3 className='footer__title'>FASHIONISTA</h3>
      <h5 className='footer__text'>Desenvolvido por Samara Ferreira</h5>
      <div>
        <a className='footer__link' href='https://github.com/Samaraferreira/Fashionista-Store' target='_blank'>
          <AiOutlineGithub size={24} />
        </a>
        <a className='footer__link' href='https://www.linkedin.com/in/samarafer' target='_blank'>
          <AiFillLinkedin size={24} />
        </a>
      </div>
    </section>
  );
};