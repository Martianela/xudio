import React from 'react';
import Header from './Header';
import { useParams } from 'react-router-dom';
import EcommerceCard from './EcommerceCard';

const CategoryPage = ({ category }) => {
  const { cat } = useParams();
  console.log(cat);

  return (
    <div className="px-10">
      <Header />
      <div className="px-10">
        <h1 className="capitalize mt-10 text-7xl">{cat}</h1>
        <div>
          <EcommerceCard />
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
