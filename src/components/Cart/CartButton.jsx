import React from 'react';

export default function CartItem() {
  const selected = false;

  function loading() {
    
  }

  return (
    <button className={`cartButton ${selected ? "active" : "" }`}>
      
    </button>
  )
}