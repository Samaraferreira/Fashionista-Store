import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { FiMenu } from 'react-icons/fi';

import './styles.css';

import Search from './SearchBar';

export default function NavBar() {
  const [display, setDisplay] = useState('none');

  function openTabBar() {
    if(display === 'none'){
      setDisplay('block');
    }
  }

  function closeTabBar() {
    setDisplay('none');
  } 

  return (
    <section>
      <button className='navbar-icon' onClick={openTabBar}>
        <FiMenu size={24} />
      </button>
      <div className='navbar-container' style={{ display: `${display}` }}>
        <div className='navbar-header'>
          <h3>Encontre o que procura</h3>
          <button className='navbar-icon' onClick={closeTabBar}>
            <AiOutlineClose size={18} color='#fff' />
          </button>
        </div>

        <Search />
      </div>
    </section>
  )
}