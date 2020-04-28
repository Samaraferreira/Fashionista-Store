import React from 'react';
import { BsBagFill, BsSearch } from 'react-icons/bs';
import { FiMenu } from 'react-icons/fi';
import './styles.css';

export default function Header() {
  return (
    <header className='header-container'>
      <span className='header-options-icon'>
        <FiMenu size={24} />
      </span>
      
      <div className='header-options'>
        <a href='/'>Camisetas</a>
        <a href='/'>Vestidos</a>
        <a href='/'>Calças</a>
      </div>

      <h3>FASHIONISTA</h3>

      <div className='header-icons'>
        <span><BsSearch size={18} /></span>
        <span><BsBagFill size={24} /></span>
      </div>
    </header>
  );
};