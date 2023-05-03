// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line react/prop-types
const ViewDetailsWithChef = ({idData}) => {
    // eslint-disable-next-line react/prop-types
    const {recipe,chefPicture,chefName,descripction,numberOfRecipes,yearsOfExperience,likes} = idData;
   // console.log(recipe[1].name)
    return (
        <div>
            <div>
                <div className='grid grid-cols-5 gap-10'>
                    <div className='pl-20 pb-20 mr-0 pr-0 col-span-2'> 
                        <img src={chefPicture} className='pic' alt="" />
                       
                    </div>
                    <div className='col-span-3'>
                        <p className='font-bold text-6xl mt-28'>{chefName}</p>
                        <p className='font-semibold text-xl p-8 pl-0'>{descripction}</p>
                        <p className='font-semibold text-xl '>Number of recipes:  {numberOfRecipes}</p>
                        <p className='font-semibold text-xl py-2'>Experience: {yearsOfExperience} years</p>
                        <p className='py-3'> <img src="/like.png" className="h-8 w-8 inline" alt="" /> <span className='ml-3'>
                        {likes}  people Likes </span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetailsWithChef;