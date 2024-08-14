import React from 'react';
import { Carousel } from '@material-tailwind/react';
const PromotionalCarousel = () => {
  return (
    <div className="flex justify-center">
      <Carousel transition={{ duration: 2 }} className="rounded-xl md:w-[70%]">
        <img
          src="https://images.unsplash.com/photo-1572584642822-6f8de0243c93?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="image 1"
          className="h-[500px] w-full object-cover"
        />
        <img
          src="https://images.unsplash.com/photo-1546502208-81d149d52bd7?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="image 2"
          className="h-[500px] w-full object-cover "
        />
        <img
          src="https://images.unsplash.com/photo-1546502208-81d149d52bd7?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="image 3"
          className=" h-[500px] w-full object-cover"
        />
      </Carousel>
    </div>
  );
};

export default PromotionalCarousel;
