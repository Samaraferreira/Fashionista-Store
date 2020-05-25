import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import './styles.css';

export default function ModalImage({ url, show, setShow }) {

  function closeModal() {
    if(show) 
      setShow(false)
    else
      setShow(true)
  } 

  return (
    <>
      {show && 
        <section className='modal-container'>
          <div className='modal-image'>
            {url ? 
              <img src={url} alt='Foto do produto' /> 
              : <img src='https://via.placeholder.com/470x594/FFFFFF/?text=Imagem+Indisponível' alt='Foto do produto' />
            }
            <button onClick={closeModal} className='modal-close'>
              <AiOutlineClose size={18} color='#000' />
            </button>
          </div>
        </section>
      }
    </>
  )
}