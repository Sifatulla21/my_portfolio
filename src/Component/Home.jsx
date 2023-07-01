import React, { useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter'
import programming from '../assets/programning.json';
import dwonload from '../assets/dwonload.json';
import Lottie from 'lottie-react';

const Home = () => {
    
    return (
        <div>
            <div className="flex flex-col md:flex-row sm:flex-col">
                <div className="w-1/2 ms-24 mt-48">
                    <h1 className="text-3xl font-bold text-black">I am <span className="text-6xl font-bold text-red-600">Sifatulla</span></h1>
                    <h1 className="text-6xl font bold text-black">A  {' '}
                        <span className="text-6xl font bold text-[#DAA520]">
                            <Typewriter
                                words={['Web Developer', 'Frontend Developer', 'MERN Stack Developer']}
                                loop={false}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1500}
                            />
                        </span>
                    </h1>
                    <div className="flex">
                        <h1 className="text-3xl font-bold text-black mt-[30px] border bg-success p-2">Download Resume</h1>
                        <button className="mt-8 btn btn-success"><a href="Front_End_Developer_Resume_Sifatulla.pdf" download><Lottie className="w-[40px]" animationData={dwonload} loop={true}></Lottie></a></button>
                        
                    </div>
                </div>
                <div className="w-1/2">
                    <div className="w-[500px] w-[400px] sm:w-[400px] lg:w-[500px]">
                        <Lottie animationData={programming} loop={true}></Lottie>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Home;