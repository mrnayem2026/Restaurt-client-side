import React from 'react';
import bannerImg from '../../assets/banner.png';

const Banner = () => {
    return (
        <div className='container mx-auto  lg:flex justify-between lg:py-28'>
            {/* banner section leftside start   */}
            <div className='p-3 mb-4'>
                <h1 className='text-3xl lg:text-7xl font-mono font-extrabold'>Good Food Made Easy <br />
                    Are You Hungry ? </h1>
                <p className='py-4 lg:py-6 text-lg '>
                    This approach to cooking emphasizes the use of fresh, <br />
                    whole ingredients, simple recipes, and time-saving <br />
                    techniques to streamline meal preparation and ensure <br />
                    that eating well is accessible to everyone. <br />
                    By making good food easy, individuals can improve their health <br />
                    and wellbeing while still enjoying the pleasures of delicious cuisine.
                </p>

                <button class="btn btn-outline rounded-lg uppercase">Learn more</button>
            </div>
            {/* banner section leftside end   */}

            {/* banner section rightside Start   */}
            <div>
                <img src={bannerImg} alt="Banner Image" />
            </div>
            {/* banner section rightside end   */}
        </div>
    );
};

export default Banner;