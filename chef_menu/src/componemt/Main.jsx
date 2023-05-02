// eslint-disable-next-line no-unused-vars
import React from "react";
import Casusel from "./Casusel";
import { useLoaderData } from "react-router-dom";
import Body from "./Body";

const Main = () => {
    const data = useLoaderData();
    
      

  return (
    <div>
      <Casusel> </Casusel>
      
      <h2 className="text-white text-4xl text-center my-20">Explore Chef Details </h2>

     <div className="grid grid-cols-3 ml-10 mb-20">
     {data.map(card => (
          <Body key={card.id} card={card} />
        ))}
     </div>
      
    </div> 
  );
};

export default Main;
