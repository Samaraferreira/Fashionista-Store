import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

import './styles.css';

export default function NavBar() {
  const [value, setValue] = useState('');

  function search() {
    
  }

  return (
    <div className='search'>
      <input 
        type='text' 
        placeholder='Pesquisar'
        onChange={(event) => setValue(event.target.value)}
      />
      <button>
        <FiSearch />
      </button>
    </div>
  )
}