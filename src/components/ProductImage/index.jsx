import React, { useState } from 'react';

import ModalImage from '../../components/ModalImage';

// import './styles.css';

export default function ProductImage({ url }) {
  const [show, setShow] = useState(false);

  return (
    <>
      <ModalImage url={url} show={show} setShow={setShow} />
      <figure className='product-image' onClick={() => setShow(true)}>
        {url ? <img src={url} alt='Foto do produto' /> : <img src='https://via.placeholder.com/470x594/FFFFFF/?text=Imagem+Indisponível' alt='Foto do produto' />}
      </figure>
    </>
  )
}