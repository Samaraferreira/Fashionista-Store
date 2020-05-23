import React from 'react';
import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai';

import './styles.css';

export default function Footer() {
  return (
    <section className='footer-container'>
      <h3>FASHIONISTA</h3>
      <h5>Desenvolvido por Samara Ferreira</h5>

      <div>
        {/* colocar repositorio */}
        <a href='https://github.com/samaraferreira' target='_blank'>
          <AiOutlineGithub size={24} />
        </a>

        <a href='https://www.linkedin.com/in/samarafer' target='_blank'>
          <AiFillLinkedin size={24} />
        </a>
      </div>
      
    </section>
  )
}