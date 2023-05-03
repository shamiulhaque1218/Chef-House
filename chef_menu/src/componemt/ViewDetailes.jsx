// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ViewDetailsWithChef from './ViewDetailsWithChef';

const ViewDetailes = () => {
    const detailes = useLoaderData();
   // console.log(detailes)

    return (
        <div className='text-slate-700 bg-white'>
            <h2 className="lg:text-4xl text-3xl text-center text-black my-10 font-semibold pt-20">Chef Details </h2>
           {
            detailes.map(idData => <ViewDetailsWithChef idData={idData} key={idData.id}>

            </ViewDetailsWithChef>)
           } 
        </div>
    );
};

export default ViewDetailes;