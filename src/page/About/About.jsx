import React from 'react';
import aboutBanner from '../../assets/aboutBannerImg.jpg';
import ceoSign from '../../assets/ceoSign.png';

const About = () => {
    return (
        <div className=' p-3 mb-4 container mx-auto flex flex-col-reverse gap-5 lg:flex-row justify-between lg:py-20 '>
            {/* Leftside start  */}
            <div>
                {/* Years Of Experience start  */}
                <div className='lg:pb-4'>
                    <h1 className='text-4xl lg:text-8xl font-black p-1'>25<sub>+</sub></h1>
                    <h1>Years Of Experience</h1>
                </div>
                {/* Years Of Experience end  */}

                <img src={aboutBanner} alt="About Image" />

            </div>
            {/* Leftside end  */}

            {/* rightSide start  */}
            <div>
                {/* Text start  */}
                <div>
                    <h1 className='text-5xl lg:text-9xl font-mono font-bold'>About Us</h1>
                    <p className='py-4 text-xl font-medium'>
                        Enjoy an Exceptional <br /> Journey of Taste
                    </p>
                    <p className='py-3'>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium <br />
                        doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo <br />
                        inventore veritatis et quasi architecto beatae vitae dicta explicabo.
                    </p>
                </div>

                <ul>
                    <li className='flex  gap-3'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                        Project Quality Management Plan
                    </li>
                    <li className='flex  gap-3'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                        The Ability to Delegate Tasks
                    </li>
                    <li className='flex  gap-3'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                        It might be a finished or unfinished
                    </li>
                </ul>

                <div className='lg:pt-40'>
                    <img src={ceoSign} alt="" />
                    <p className='text-3xl text-orange-300 font-black '>CEO and Founder</p>
                </div>
            </div>
            {/* rightSide end  */}
        </div>
    );
};

export default About;