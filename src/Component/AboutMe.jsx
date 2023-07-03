import { Typewriter } from 'react-simple-typewriter'
import programming from '../assets/about.json';
import Lottie from 'lottie-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useContext, useEffect } from 'react';
import { ThemeContext } from './Provider/ThemeProvider';
import { FaDownload, FaExternalLinkAlt } from 'react-icons/fa';
const AboutMe = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    const { theme } = useContext(ThemeContext);
    return (
        <div>
            <div className="flex flex-col md:flex-row sm:flex-col">
                <div  data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" className="w-1/2 mx-auto">
                    <div className="w-[270px] sm:w-[270px] lg:w-[500px]">
                        <Lottie animationData={programming} loop={true}></Lottie>
                    </div>

                </div>
                <div data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" className="w-1/2ms-8 lg:ms-24 sm:ms-8 px-2 mt-48">
                    <h1 className={`text-xl font-bold text-black ${theme === 'dark' ? 'text-white' : ''}`}>Hello, I'm  <span className="text-xl font-bold text-red-600"><Typewriter
                        words={['Sifatulla']}
                        loop={false}
                        cursor
                        cursorStyle='_'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1500}
                    /></span></h1>
                    <h1 className={`text-xl text-black ${theme === 'dark' ? 'text-white' : ''}`}>a passionate frontend developer with a strong foundation in computer science. I graduated from North South University with a degree in Computer Science and Engineering. With my knowledge and skills in web development, I strive to create visually appealing and user-friendly interfaces that provide seamless user experiences.
                        <span className="text-3xl h-48 font bold text-[#DAA520]">

                        </span>
                    </h1>
                    <div className="flex mt-12">
                        <div className="mr-12">
                            <h1 className={`mb-4 border-b-4  text-center text-xl border-black ${theme === 'dark' ? 'border-white text-white' : ''}`}><b>Age:</b> 24 years</h1>
                            <h1 className={`mb-4 border-b-4  text-center text-xl border-black ${theme === 'dark' ? 'border-white text-white' : ''}`}><b>Nationality:</b> Bangladeshi</h1>
                            <h1 className={`mb-4 border-b-4  text-center text-xl border-black ${theme === 'dark' ? 'border-white text-white' : ''}`}><b>Language:</b> Bangla, English</h1>
                        </div>
                        <div>
                            <h1 className={`mb-4 border-b-4  text-center text-xl border-black ${theme === 'dark' ? 'border-white text-white' : ''}`}><b>Address:</b> Jatrabari, Dhaka, Bangladesh</h1>
                            <h1 className={`mb-4 border-b-4  text-center text-xl border-black ${theme === 'dark' ? 'border-white text-white' : ''}`}><b>Phone :</b> +8801959631391</h1>
                            <h1 className={`mb-4 border-b-4  text-center text-xl border-black ${theme === 'dark' ? 'border-white text-white' : ''}`}><b>Email :</b> sifat2109@gmail.com</h1>
                        </div>
                    </div>
                    <div className="flex">
                        <button className="mt-8 mr-4 custom-box btn bg-[#DAA520] hover:bg-[#DAA520] font-bold text-lg">
                            <a href="Front_End_Developer_Resume_Sifatulla.pdf" download>
                                <span className="flex items-center">
                                    Download
                                     <FaDownload className="text-xl ml-2"></FaDownload>
                                </span>
                            </a>
                        </button>

                        <button className="mt-8 custom-box btn bg-[#DAA520] hover:bg-[#DAA520] font-bold text-lg">
                            <a href="#contact">
                                <span className="flex items-center">
                                    Hire Me
                                    <FaExternalLinkAlt className="ml-2"></FaExternalLinkAlt>
                                </span>
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default AboutMe;