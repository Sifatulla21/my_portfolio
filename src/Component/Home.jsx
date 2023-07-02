import React, { useContext, useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter'
import programming from '../assets/programning.json';
import Lottie from 'lottie-react';
import { ThemeContext } from './Provider/ThemeProvider';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    useEffect(() => {
        AOS.init();
      }, []);
    const { theme } = useContext(ThemeContext);
    return (
        <div>
            <div data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="500" className="flex flex-col md:flex-row sm:flex-col">
                <div className="w-1/2 ms-24 lg:ms-24 sm:ms-2 mt-48">
                    <h1 className={`text-3xl font-bold text-black ${ theme === 'dark' ? 'text-white' : ''}`}>I am <span className="text-6xl font-bold text-red-600">Sifatulla</span></h1>
                    <h1 className={`text-3xl font-bold text-black ${ theme === 'dark' ? 'text-white' : ''}`}>A  {' '}
                        <span className="text-3xl h-48 font bold text-[#DAA520]">
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
                        <div className="lottie-container">
                        <button className="mt-8 btn btn-success"><a href="Front_End_Developer_Resume_Sifatulla.pdf" download>Download Resume</a></button>
                        </div>
                        
                    </div>
                </div>
                <div className="w-1/2 mx-auto">
                    <div className="w-[270px] sm:w-[270px] lg:w-[500px]">
                        <Lottie animationData={programming} loop={true}></Lottie>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Home;