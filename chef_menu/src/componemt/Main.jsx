// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Casusel from "./Casusel";
import { useLoaderData } from "react-router-dom";
import Body from "./Body";

const Main = () => {
    const data = useLoaderData();
    
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
