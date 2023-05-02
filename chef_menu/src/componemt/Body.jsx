// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line react/prop-types
const Body = ({card}) => {
 //   console.log(card)
 // eslint-disable-next-line react/prop-types
 const {chefPicture,chefName,yearsOfExperience,numberOfRecipes,likes} = card
    return (
        <div className='mb-10'> 

      <div className="mt-2">
        <div className="card w-96 glass bg-slate-300 hover:bg-slate-400">
          
          <div className="card-body">
            <h2 className="card-title">{chefName}</h2>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">{yearsOfExperience} years of experience</div>
            </div>
            <div className="">
            <div>
            <p className="my-5"> <img src="book.png" className="h-8 w-8 inline" alt="" /> Numbers of recipes : {numberOfRecipes} </p>
            <p> <img src="like.png" className="h-8 w-8 inline" alt="" /> {likes} people Likes</p>
            </div>
            
            <div className="card-actions justify-end ">
              <button className="btn btn-primary ">View Recipes Button!</button>
            </div>
            </div>
          </div>
        </div>


      </div>
        </div>
    );
};

export default Body;