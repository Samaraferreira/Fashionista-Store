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
        <a href='/'>Roupas</a>
        <a href='/'>Acessórios</a>
        <a href='/'>Calçados</a>
      </div>

      <h3>FASHIONISTA</h3>

      <div className='header-icons'>
        <button><BsSearch size={18} /></button>
        <button><BsBagFill size={24} /></button>
      </div>
    </header>
  );
};