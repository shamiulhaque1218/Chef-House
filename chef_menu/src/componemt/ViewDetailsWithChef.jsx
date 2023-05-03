import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {FaRegStar ,FaStar } from 'react-icons/fa';
// eslint-disable-next-line no-unused-vars
import React from "react";
import Rating from "react-rating";
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
        <div className="grid lg:grid-cols-5 lg:gap-10">
          <div className="lg:pl-20 lg:pb-20 col-span-2">
            <img src={chefPicture} className="lg:pic ml-12 lg:ml-0 lg:pl-0 pl-2" alt="" />
          </div>
          <div className="col-span-3 ml-3">
            <p className="font-bold lg:text-6xl text-3xl  lg:mt-28 mt-6">{chefName}</p>
            <p className="lg:font-semibold lg:text-xl text-lg lg:py-8 p-2 pl-0">{descripction}</p>
            <p className="font-semibold lg:text-xl text-lg">
              Number of recipes: {numberOfRecipes}
            </p>
            <p className="font-semibold lg:text-xl text-lg py-2">
              Experience: {yearsOfExperience} years
            </p>
            <p className="py-3">
              {" "}
              <img src="/like.png" className="h-8 w-8 inline" alt="" />{" "}
              <span className="ml-3">{likes} people Likes </span>
            </p>
          </div>
        </div>

       

        <div className="border lg:mx-24 lg:mb-20 lg:hover:transform lg:transition duration-300 lg:hover:scale-110 lg:hover:translate-x-2 lg:hover:translate-y-2 ">
          <div className="card  bg-base-100 shadow-xl rounded-xl lg:mb-10 mb-5">
          <button className='icon_book text-end p-6' onClick={handlemark}> <FontAwesomeIcon  icon={faBookmark}  beatFade /> </button> 
            <figure>
              <img
                src={recipe[1].picture}
                className="rounded-2xl h-44 w-80 px-4 pt-4"
                alt="Shoes"
              /> <span className="lg:pl-48">Rating: 
              
              <Rating readonly
  placeholderRating={recipe[1].rating}
  emptySymbol={<FaRegStar> </FaRegStar>}
  placeholderSymbol={<FaStar className="text-blue-400"> </FaStar>}
  fullSymbol={<FaStar> </FaStar>}
/>
              
        
               </span>
            </figure>
            <div className="card-body ">
              <h2 className="card-title">{}</h2>
              <p className="text-xl font-bold">{recipe[1].name}</p>
              <p className="text-lg"><span className="font-semibold">Ingredients:</span> {recipe[1].ingredients}</p>
              <p className="text-lg"> <span className="font-semibold">Cooking Method:</span> {recipe[1].cookingmethod}</p>
            </div>
          </div>




        </div>
        <div className="border lg:mx-24  lg:mb-20 lg:hover:transform lg:transition duration-300 lg:hover:scale-110 lg:hover:translate-x-2 lg:hover:translate-y-2 ">
          <div className="card  bg-base-100 shadow-xl rounded-xl lg:mb-10 mb-5">
          <button className='icon_book text-end p-6' onClick={handlemark}> <FontAwesomeIcon  icon={faBookmark}  beatFade /> </button> 
            <figure>
                
              <img
                src={recipe[0].picture}
                className="rounded-2xl h-44 w-80 px-4 pt-4"
                alt="food"
              /> <span className="lg:pl-48">Rating: 


<Rating readonly
  placeholderRating={recipe[0].rating}
  emptySymbol={<FaRegStar> </FaRegStar>}
  placeholderSymbol={<FaStar className="text-blue-400"> </FaStar>}
  fullSymbol={<FaStar> </FaStar>}
/>
              
              
               </span>
            </figure>
            <div className="card-body ">
              <h2 className="card-title">{}</h2>
              <p className="text-xl font-bold">{recipe[0].name}</p>
              <p className="text-lg"><span className="font-semibold">Ingredients:</span> {recipe[0].ingredients}</p>
              <p className="text-lg"> <span className="font-semibold">Cooking Method:</span> {recipe[0].cookingmethod}</p>
            </div>
          </div>
        </div>

        
        <div className="border lg:mx-24  mb-20 lg:hover:transform lg:transition duration-300 lg:hover:scale-110 lg:hover:translate-x-2 lg:hover:translate-y-2 ">
          <div className="card  bg-base-100 shadow-xl rounded-xl lg:mb-10 mb-5">
          <button className='icon_book text-end p-6' onClick={handlemark}> <FontAwesomeIcon  icon={faBookmark}  beatFade /> </button> 
            <figure>
                
              <img
                src={recipe[2].picture}
                className="rounded-2xl h-44 w-80 px-4 pt-4"
                alt="Shoes"
              /> <span className="lg:pl-48">Rating: 
              
              
              <Rating readonly
  placeholderRating={recipe[2].rating}
  emptySymbol={<FaRegStar> </FaRegStar>}
  placeholderSymbol={<FaStar className="text-blue-400"> </FaStar>}
  fullSymbol={<FaStar> </FaStar>}
/>
              
               </span>
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
