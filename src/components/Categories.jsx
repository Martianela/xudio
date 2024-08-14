import React from 'react';
import CardCat from './CardCat';
import { Link } from 'react-router-dom';

const categories = [
  'Beauty & Personal Care',
  'Electronics',
  'Books & Stationery',
  'Art & Handicraft',
  'Gifts & Toys',
];

const Categories = () => {
  return (
    <section className="mt-8">
      <h2 className="text-6xl font-bold ">Categories</h2>
      <div className="flex gap-5 mt-4 flex-wrap rounded">
        {categories.map((category) => (
          <Link to={category}>
            <CardCat category={category} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;
