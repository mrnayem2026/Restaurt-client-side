import React from 'react';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';

const ChefCard = ({ chef }) => {
    const { id, name, years_of_experience, number_of_recipes, likes, picture } = chef;


    return (
        <div className="card w-96 bg-base-100 shadow-xl  bg-gray-300  text-black">
            <figure>
                <LazyLoad height={400}>
                    <img src={picture} alt="Our Chef" />
                </LazyLoad>
            </figure>
            <div className="card-body">
                <h2 className="text-3xl font-sans font-black">{name}</h2>
                <p><span className='text-xl font-thin'>Years of experience</span> : {years_of_experience}</p>
                <p><span className='text-xl font-thin'>Numbers of recipes</span> : {number_of_recipes}</p>
                <p><span className='text-xl font-thin'>Likes</span> : {likes}</p>
                <div className="card-actions">
                    <Link to={`/chef/${id}`}><button className="btn rounded-lg">View Recipes</button></Link>

                </div>
            </div>
        </div>
    );
};

export default ChefCard;