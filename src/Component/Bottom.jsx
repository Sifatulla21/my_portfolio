import React from 'react';
import { FaHome, FaWhatsapp } from 'react-icons/fa';
import ToggleButton from './Theme/ToggleButton';
import ReactWhatsapp from 'react-whatsapp';
import Lottie from 'lottie-react';
import whatsapp from '../assets/whatsapp.json';

const Bottom = () => {
    return (
        <div>
            <div className="fixed bottom-20 right-4 mt-4 mb-2">
                <ReactWhatsapp number="+8801959631391" message="Hello Sifat." className="">
                    <div className="w-[50px] sm:w-[50px] lg:w-[100px]">
                        <Lottie animationData={whatsapp} loop={true}></Lottie>
                    </div>
                </ReactWhatsapp>
            </div>
            <div className="btm-nav m-4 bg-[#DAA520] custom-box w-1/2 w-full sm:w-full md:w-full lg:w-1/2 mx-auto rounded-full">
                <a href="#about" className="text-sm lg:text-xl md:text-2xl sm:text-sm font-bold">
                    <span className="btm-nav-label">About</span>
                </a>
                <a href="#contact" className="text-sm lg:text-xl md:text-2xl sm:text-sm font-bold">
                    <span className="btm-nav-label">Contact</span>
                </a>
                <a href="#">
                    <FaHome className="text-2xl lg:text-6xl md:text-4xl sm:text-2xl font-bold"></FaHome>
                </a>
                <a href="#skills" className="text-sm lg:text-xl md:text-2xl sm:text-sm font-bold">
                    <span className="btm-nav-label">Skills</span>
                </a>
                <a href="#projects" className="text-sm lg:text-xl md:text-2xl sm:text-sm font-bold">
                    <span className="btm-nav-label">Projects</span>
                </a>
                <ToggleButton></ToggleButton>
            </div>
        </div>
    );
};

export default Bottom;