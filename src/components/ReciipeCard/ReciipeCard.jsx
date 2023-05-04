import React, { useState } from 'react';
import { Rating } from '@smastrom/react-rating'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '@smastrom/react-rating/style.css'

const ReciipeCard = ({ recipe }) => {

    const [disable,setDisable] = useState(false);

    const { recipeName, picture, cookingMethod, rating } = recipe;

    const notify = () => {
        toast("The recipe is my favorite!");
        setDisable(true)
    }


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

                {/* Rating  */}
                <div className='flex gap-2'>
                    <Rating
                        style={{ maxWidth: 100 }}
                        value={Math.round(rating)} readOnly />
                    <span className='ms-2'> {rating}</span>
                </div>

                <div className="card-actions ">
                    <button className="btn rounded-lg" onClick={notify} disabled={disable}>Favorite</button>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default ReciipeCard;