// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import Casusel from "./Casusel";
import { useLoaderData } from "react-router-dom";
import Body from "./Body";
import Food from "./Food"

const Main = () => {
    const data = useLoaderData(); 


    const [dataFood,setDataFood] =useState([]);
    useEffect(() => {
      fetch("https://server-site-assignment-10-shamiulhaque1218.vercel.app/food")
      .then(res => res.json())
      .then(data => setDataFood(data));
  },[])



    const [num,setnum] = useState(6) 
    const btn = () => {
     const number = num + 2
     setnum(number);
    }
   console.log(num);
  const uk = () => {
   //console.log('ok')
  }
    const loadCount =  uk ? num : 6; 

  return (
    <div>
      <Casusel> </Casusel>

      <h2 className="text-white text-4xl text-center my-20">Traditional Italian Foods </h2>
      <div className="grid grid-cols-4">
          {
            dataFood.map(food => <Food food={food} key={food.id}> </Food>)
          }
      </div>
      
      <h2 className="text-white text-4xl text-center my-20">Explore Chef Details </h2>

     <div className="grid grid-cols-3 ml-10 ">
     {data.slice(0,loadCount).map(card => (
          <Body key={card.id} btn={btn} card={card} />
        ))}
     </div>
     <div className="text-center mb-20">
     <button onClick={btn} className="btn btn-active btn-primary">See more</button>
     </div>
    </div> 
  );
};

export default Main;
