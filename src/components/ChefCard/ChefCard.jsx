import React from 'react';

const ChefCard = ({chef}) => {
    const {id,name,years_of_experience,number_of_recipes,likes,picture} = chef;
    return (
        <div className="card w-96 bg-base-100 shadow-xl  bg-gray-300  text-black">
            <figure><img src={picture}  alt="Our Chef" /></figure>
            <div className="card-body">
                <h2 className="text-3xl font-sans font-black">{name}</h2>
                <p><span className='text-xl font-thin'>Years of experience</span> : {years_of_experience}</p>
                <p><span className='text-xl font-thin'>Numbers of recipes</span> : {number_of_recipes}</p>
                <p><span className='text-xl font-thin'>Likes</span> : {likes}</p>
                <div className="card-actions">
                    <button className="btn rounded-lg">View Recipes</button>
                </div>
            </div>
        </div>
    );
};

export default ChefCard;