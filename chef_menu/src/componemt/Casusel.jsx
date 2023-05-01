// eslint-disable-next-line no-unused-vars
import React from 'react';

const Casusel = () => {
    return (
        <div>

<div className="carousel w-5/6 ml-24">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://img.freepik.com/free-photo/top-view-asian-dish-with-chopsticks-copy-space_23-2148694382.jpg?t=st=1682964151~exp=1682964751~hmac=b7861951ee2cfaa12399382486120de36e5aa993de66ebc752c3abb2debe88c8" className="w-full h-96 mt-2 mx-5 rounded-lg" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://img.freepik.com/premium-photo/bulgur-meat-salad-leaves-lettuce-healthy-meal-food-diet-snack-table-copy-space-food_88242-19154.jpg" className="w-full h-96 mt-2 mx-5 rounded-lg" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://img.freepik.com/premium-photo/udon-noodles-with-chicken-peppers-japanese-cuisine_152904-7853.jpg" className="w-full h-96 mt-2 mx-5 rounded-lg" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://img.freepik.com/free-photo/high-angle-asian-dish-with-eggs-copy-space_23-2148694386.jpg?t=st=1682964151~exp=1682964751~hmac=4273703a6864bd79bb7943c7f1a6868d471f505dbf15b59b581ae78c75e6ba25" className="w-full h-96 mt-2 mx-5 rounded-lg"/>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Casusel;