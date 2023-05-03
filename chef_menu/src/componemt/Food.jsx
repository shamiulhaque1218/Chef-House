/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-unused-vars
import React from 'react';

const Food = ({food}) => {
  
    //console.log(food);
    const {name,picture,description} = food
    return (
        <div className='lg:mb-10 hover:transform transition duration-300 hover:scale-110 hover:translate-x-2 hover:translate-y-2 '>
           <div className="card w-72 bg-base-100 shadow-xl rounded-xl mb-10 pb-10">
               <figure ><img src={picture} className='rounded-full h-44 w-full px-4 pt-4' alt="Shoes" /></figure>
                <div className="card-body h-56">
               <h2 className="card-title">{name}</h2>
               <p >{description?.slice(0,185)}...<button className='text-violet-600'>see more</button> </p>
            </div>
           </div>
        </div>
    );
};

export default Food;