import React from 'react';
import EcommerceCard from './EcommerceCard';

const FeaturedProducts = () => {
  return (
    <section className="mt-8">
      <h2 className="text-5xl font-bold">Trending Products</h2>
      <div className="grid grid-cols-3 gap-4 mt-4">
        <div className="p-4 bg-gray-100 rounded">
          <EcommerceCard />
        </div>
        <div className="p-4 bg-gray-100 rounded">
          {' '}
          <EcommerceCard />
        </div>
        <div className="p-4 bg-gray-100 rounded">
          {' '}
          <EcommerceCard />
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
