import React from 'react';
import Categories from './Categories';
import FeaturedProducts from './FeaturedProducts';
import Header from './Header';
import NearbyStores from './NearbyStores';
import PromotionalCarousel from './PromotionalCarousel';
const Home = () => {
  return (
    <>
      <div className="px-10 ">
        <Header />
        <PromotionalCarousel />
        <Categories />
        <FeaturedProducts />
        <NearbyStores />
      </div>
    </>
  );
};

export default Home;
