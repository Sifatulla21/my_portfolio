import React, { useContext, useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter'
import programming from '../assets/programning.json';
import Lottie from 'lottie-react';
import { ThemeContext } from './Provider/ThemeProvider';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaDownload, FaExternalLinkAlt } from 'react-icons/fa';

const Home = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    const { theme } = useContext(ThemeContext);
    return (
        <div>
            <div className="flex flex-col md:flex-row sm:flex-col">
                <div  data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" className="w-1/2 ms-8 lg:ms-24 sm:ms-8 mt-28">
                    <h1 className={`text-3xl font-bold text-black ${theme === 'dark' ? 'text-white' : ''}`}>I am <span className="text-6xl font-bold text-red-600">Sifatulla</span></h1>
                    <h1 className={`text-3xl font-bold text-black h-28 ${theme === 'dark' ? 'text-white' : ''}`}>A  {' '}
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
                        <button className="mr-4 custom-box btn bg-[#DAA520] hover:bg-[#DAA520] font-bold text-lg">
                            <a href="Front_End_Developer_Resume_Sifatulla.pdf" download>
                                <span className="flex items-center">
                                    Resume
                                     <FaDownload className="text-xl ml-2"></FaDownload>
                                </span>
                            </a>
                        </button>

                        <button className="custom-box btn bg-[#DAA520] hover:bg-[#DAA520] font-bold text-lg">
                            <a href="#contact">
                                <span className="flex items-center">
                                    Hire Me
                                    <FaExternalLinkAlt className="ml-2"></FaExternalLinkAlt>
                                </span>
                            </a>
                        </button>
                    </div>
                </div>
                <div  data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" className="w-1/2 mt-4 ml-16">
                    <div className="w-[270px] sm:w-[270px] lg:w-[500px]">
                        <Lottie animationData={programming} loop={true}></Lottie>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Home;