import React from 'react';

import CategoryRoundedIcon from '@mui/icons-material/CategoryRounded';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
const CardCat = ({ category }) => {
  console.log(category);

  return (
    <div className="bg-[#FFEEAD] transform transition-transform duration-300 hover:scale-110 w-64 h-52 text-center flex flex-col justify-center  ">
      <CategoryOutlinedIcon className="mx-auto" style={{ fontSize: '60px' }} />
      <p className="mt-1 text-lg font-light">{category}</p>
    </div>
  );
};

export default CardCat;
