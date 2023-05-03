// eslint-disable-next-line no-unused-vars
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Body = ({card}) => {

  
 //   console.log(card)
 // eslint-disable-next-line react/prop-types
 const {id,chefPicture,chefName,yearsOfExperience,numberOfRecipes,likes} = card;


    return (
        <div className='mb-10'> 

      <div className="mt-2">
        <div className="card w-96 glass bg-slate-300 hover:bg-slate-400">
          <figure>
            <img className='h-72 w-full'
              src={chefPicture}
              alt="car!"
            />
          </figure>
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
            
            <Link to={`/card/${id}`} className="card-actions justify-end ">
              <button className="btn btn-primary ">View Recipes Button!</button>
            </Link>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Body;