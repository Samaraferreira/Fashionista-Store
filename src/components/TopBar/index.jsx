import React from 'react';
import { Link } from 'react-router-dom';

import NavBar from '../NavBar';
import Cart from '../Cart';

import './styles.css';

export default function TopBar() {

  return (
    <header className='topbar-container'>
      <NavBar />
      <Link to='/'>
        <h3>FASHIONISTA</h3>
      </Link>
      <Cart />
    </header>
  );
};