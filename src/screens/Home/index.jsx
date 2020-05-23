import React from 'react';

import TopBar from '../../components/TopBar';
import Banner from '../../components/Banner';
import List from '../../components/ListProductsHome';
import Footer from '../../components/Footer';

export default function Home() {
  return (
    <div className='home-container'>
      <TopBar />
      <Banner />
      <List />
      <Footer />
    </div>  
  );
};