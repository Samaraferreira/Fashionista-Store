import React from 'react';
import { Link } from 'react-router-dom';

import Search from '../Search';
import Cart from '../Cart';

import './styles.css';

export default function TopBar() {

  return (
    <header className='topbar-container'>
      <Search />
      <Link to='/'>
        <h3>FASHIONISTA</h3>
      </Link>
      <Cart />
    </header>
  );
};