import React from 'react';
import cleanBarIcons from '../../assets/cleanBarIcons.png';
import freshProductcsIcon from '../../assets/freshProductsIcons.png';
import skilledChefsIcons from '../../assets/skilledChefsIcons.png';
import cleanBar from '../../assets/cleanBar.jpg';
import freshProduct from '../../assets/freshProducts.jpg';
import skilledChefs from '../../assets/skilledChefs.jpg'

const Process = () => {
    return (
        <div className=' p-3 mb-4 container mx-auto lg:py-40'>
            {/* Header start  */}
            <div className='text-center'>
                <h1 className='text-xl lg:text-2xl font-medium text-orange-200'>Our Process</h1>
                <p className='text-3xl lg:text-5xl font-mono font-bold'>Healthy & Improves Your Mood</p>
            </div>
            {/* Header end  */}

            {/* card section start  */}
            <div className='lg:pt-20 flex flex-col gap-6 lg:flex-row  justify-around'>
                {/* card no : 1  */}
                <div className="card w-96 bg-gray-300 text-black shadow-xl">
                    <div className="card-body">
                        <img src={cleanBarIcons} className='h-20 w-20' alt="cleanBarIcons" />
                        <h2 className="text-3xl font-semibold font-mono">Clean Bar</h2>
                        <p>Lorem Ipsum is simply dummy text of the <br /> printing typesetting industry ipsum.</p>
                    </div>
                    <figure><img src={cleanBar} alt="Shoes" /></figure>
                </div>

                {/* card no : 2  */}
                <div className="card w-96 bg-gray-300 text-black shadow-xl">
                    <div className="card-body">
                        <img src={skilledChefsIcons} className='h-20 w-20' alt="cleanBarIcons" />
                        <h2 className="text-3xl font-semibold font-mono">Skilled Chefs</h2>
                        <p>Lorem Ipsum is simply dummy text of the <br /> printing typesetting industry ipsum.</p>
                    </div>
                    <figure><img src={skilledChefs} alt="Shoes" /></figure>
                </div>

                {/* card no : 1  */}
                <div className="card w-96 bg-gray-300 text-black shadow-xl">
                    <div className="card-body">
                        <img src={freshProductcsIcon} className='h-20 w-20' alt="cleanBarIcons" />
                        <h2 className="text-3xl font-semibold font-mono">Fresh Products</h2>
                        <p>Lorem Ipsum is simply dummy text of the <br /> printing typesetting industry ipsum.</p>
                    </div>
                    <figure><img src={freshProduct} alt="Shoes" /></figure>
                </div>
            </div>
            {/* card section end  */}
        </div>
    );
};

export default Process;