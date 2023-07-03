import { useContext, useEffect } from 'react';
import phone from '../../assets/phone.png';
import mail from '../../assets/mail.png';
import position from '../../assets/position.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ThemeContext } from '../Provider/ThemeProvider';

const ContactInfo = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    const { theme } = useContext(ThemeContext);
    return (
        <div className="flex flex-col md:flex-row sm:flex-col justify-center sm:flex-cols  mb-12 ms-12">
            <div data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" className="p-4  mx-20">
                <div className="w-1/2 mx-auto w-[80px] sm:w-[80px] lg:w-[100px]">
                    <img src={phone} alt="" />
                </div>

                <div className={`text-center ${theme === 'dark' ? 'text-white' : ''}`}>
                    <h1 className="my-4 text-3xl font-bold">Call</h1>
                    <h1 className="text-xl font-semibold">+8801959631391</h1>
                </div>
            </div>
            <div data-aos="fade-down" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" className="p-4 mx-20">
                <div className="w-1/2 mx-auto w-[80px] sm:w-[80px] lg:w-[100px]">
                    <img src={mail} alt="" />
                </div>

                <div className={`text-center ${theme === 'dark' ? 'text-white' : ''}`}>
                <h1 className="my-4 text-3xl font-bold">Email</h1>
                    <h1 className="text-xl font-semibold">sifat2109@gmail.com</h1>
                </div>
            </div>
            <div data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" className="p-4 mx-20">
                <div className="w-1/2 mx-auto w-[80px] sm:w-[80px] lg:w-[100px]">
                    <img src={position} alt="" />
                </div>

                <div className={`text-center ${theme === 'dark' ? 'text-white' : ''}`}>
                <h1 className="my-4 text-3xl font-bold">Location</h1>
                    <h1 className="text-xl font-semibold">Jatrabari, Dhaka, Bangladesh</h1>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;