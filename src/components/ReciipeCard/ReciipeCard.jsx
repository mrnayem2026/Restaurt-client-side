import React from 'react';

const ReciipeCard = ({ recipe }) => {
    const { recipeName, picture, cookingMethod, rating } = recipe;
    return (
        <div className="card w-96 bg-base-100 shadow-xl bg-gray-200  text-black">
            <figure><img src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="text-4xl font-mono font-extrabold">{recipeName}</h2>
                <p> <span className='text-xl font-mono'>Cooking Method : </span>{cookingMethod}</p>
                <div className='py-2'>
                    <h1 className='text-center text-lg font-mono'>Ingrediensts</h1>
                    <ul>
                        {recipe.ingredients.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className="card-actions ">
                    <button className="btn rounded-lg">Favorite</button>
                </div>
            </div>
        </div>
    );
};

export default ReciipeCard;