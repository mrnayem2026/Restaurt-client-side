import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ChefCard from '../ChefCard/ChefCard';

const Chef = () => {
    const [chefs,setChefs] = useState([]);

    // fetch chef data from server 

    useEffect(()=>{
        fetch('http://localhost:3000/')
            .then(res => res.json())
            .then(data => setChefs(data))
            .catch(error => console.error(error))
    },[])
    return (
        <div className='p-3 mb-4 container mx-auto'>
            <h1 className='text-center text-4xl lg:text-8xl py-6 lg:py-14 font-black font-mono'>Our Chef</h1>
            <div className='grid lg:grid-cols-3 gap-6'>
                {
                    chefs.map((chef)=><ChefCard key={chef.id} chef={chef}></ChefCard>)
                }
            </div>
        </div>
    );
};

export default Chef;