// eslint-disable-next-line no-unused-vars
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import React from "react";
// eslint-disable-next-line react/prop-types
const ViewDetailsWithChef = ({ idData }) => {
    const handlemark = (e) => {
        toast("Favorite recipe bookmark !")
        
       e.target.style.display = 'none'
    }
  // eslint-disable-next-line react/prop-types
  const {
    recipe,
    chefPicture,
    chefName,
    descripction,
    numberOfRecipes,
    yearsOfExperience,
    likes,
  } = idData;
 // console.log(recipe[1])
  return (
    <div>
      <div>
        <div className="grid grid-cols-5 gap-10">
          <div className="pl-20 pb-20 mr-0 pr-0 col-span-2">
            <img src={chefPicture} className="pic" alt="" />
          </div>
          <div className="col-span-3">
            <p className="font-bold text-6xl mt-28">{chefName}</p>
            <p className="font-semibold text-xl p-8 pl-0">{descripction}</p>
            <p className="font-semibold text-xl ">
              Number of recipes: {numberOfRecipes}
            </p>
            <p className="font-semibold text-xl py-2">
              Experience: {yearsOfExperience} years
            </p>
            <p className="py-3">
              {" "}
              <img src="/like.png" className="h-8 w-8 inline" alt="" />{" "}
              <span className="ml-3">{likes} people Likes </span>
            </p>
          </div>
        </div>



        <div className="border mx-24 mb-20 hover:transform transition duration-300 hover:scale-110 hover:translate-x-2 hover:translate-y-2 ">
          <div className="card  bg-base-100 shadow-xl rounded-xl mb-10">
          <button className='icon_book text-end p-6' onClick={handlemark}> <FontAwesomeIcon  icon={faBookmark}  beatFade /> </button> 
            <figure>
                
              <img
                src={recipe[1].picture}
                className="rounded-2xl h-44 w-80 px-4 pt-4"
                alt="Shoes"
              /> <span className="pl-48">Rating: {recipe[1].rating} </span>
            </figure>
            <div className="card-body ">
              <h2 className="card-title">{}</h2>
              <p className="text-xl font-bold">{recipe[1].name}</p>
              <p className="text-lg"><span className="font-semibold">Ingredients:</span> {recipe[1].ingredients}</p>
              <p className="text-lg"> <span className="font-semibold">Cooking Method:</span> {recipe[1].cookingmethod}</p>
            </div>
          </div>




        </div>
        <div className="border mx-24 mb-20 hover:transform transition duration-300 hover:scale-110 hover:translate-x-2 hover:translate-y-2 ">
          <div className="card  bg-base-100 shadow-xl rounded-xl mb-10">
          <button className='icon_book text-end p-6' onClick={handlemark}> <FontAwesomeIcon  icon={faBookmark}  beatFade /> </button> 
            <figure>
                
              <img
                src={recipe[0].picture}
                className="rounded-2xl h-44 w-80 px-4 pt-4"
                alt="food"
              /> <span className="pl-48">Rating: {recipe[0].rating} </span>
            </figure>
            <div className="card-body ">
              <h2 className="card-title">{}</h2>
              <p className="text-xl font-bold">{recipe[0].name}</p>
              <p className="text-lg"><span className="font-semibold">Ingredients:</span> {recipe[0].ingredients}</p>
              <p className="text-lg"> <span className="font-semibold">Cooking Method:</span> {recipe[0].cookingmethod}</p>
            </div>
          </div>
        </div>

        
        <div className="border mx-24 mb-20 hover:transform transition duration-300 hover:scale-110 hover:translate-x-2 hover:translate-y-2 ">
          <div className="card  bg-base-100 shadow-xl rounded-xl mb-10">
          <button className='icon_book text-end p-6' onClick={handlemark}> <FontAwesomeIcon  icon={faBookmark}  beatFade /> </button> 
            <figure>
                
              <img
                src={recipe[2].picture}
                className="rounded-2xl h-44 w-80 px-4 pt-4"
                alt="Shoes"
              /> <span className="pl-48">Rating: {recipe[2].rating} </span>
            </figure>
            <div className="card-body ">
              <h2 className="card-title">{}</h2>
              <p className="text-xl font-bold">{recipe[2].name}</p>
              <p className="text-lg"><span className="font-semibold">Ingredients:</span> {recipe[2].ingredients}</p>
              <p className="text-lg"> <span className="font-semibold">Cooking Method:</span> {recipe[2].cookingmethod}</p>
            </div>
          </div>
        </div>

      </div>
      <ToastContainer />
    </div>
  );
};

export default ViewDetailsWithChef;
