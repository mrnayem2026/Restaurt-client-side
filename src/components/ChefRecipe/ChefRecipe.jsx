import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ChefRecipe = () => {
    // const { id } = useParams();
    const chefRecipe = useLoaderData();
    const { id, name, years_of_experience, number_of_recipes, likes, picture, description } = chefRecipe;


    return (
        <div className='container mx-auto'>
            {/* About section of specific chef   */}
            <div className=' py-10 flex gap-40'>
                {/* Image section start  */}
                <div>
                    <img src={picture} className='h-[750px] rounded-xl' alt="Chef Picture" />
                </div>
                {/* Image section End  */}

                {/* text section start  */}
                <div>
                    <h1 className='text-center text-8xl font-mono font-black'>About Chef</h1>
                    <div className='py-12'>
                        <p className='text-2xl font-sans font-bold'> <span className=' text-orange-200'>Name : </span> {name}</p>
                        <p> <span className='text-2xl font-sans font-bold text-orange-200'>Bio : </span> {description}</p>
                        <p> <span className='text-2xl font-sans font-bold text-orange-200'>Years of Exprience : </span> {years_of_experience}</p>
                        <p> <span className='text-2xl font-sans font-bold text-orange-200'>Number of recipes : </span> {number_of_recipes}</p>
                        <p> <span className='text-2xl font-sans font-bold text-orange-200'>Likes : </span> {likes}</p>
                    </div>
                </div>
                {/* text section End  */}
            </div>
            
        </div>
    );
};

export default ChefRecipe;