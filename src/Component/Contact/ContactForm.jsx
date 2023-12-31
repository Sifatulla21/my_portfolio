import Lottie from 'lottie-react';
import { useContext, useEffect, useRef } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import contactus from '../../assets/contactus.json';
import { ThemeContext } from '../Provider/ThemeProvider';
import AOS from 'aos';
import 'aos/dist/aos.css';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const ContactForm = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    const { theme } = useContext(ThemeContext);
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_22f2dug', 'template_3p8m2kp', form.current, 'RmW955bJ24HPN4EXT')
            .then((result) => {
                if (result.text == "OK") {
                    form.current.reset();
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Message sent successfylly. Thankyou!',
                        showConfirmButton: false,
                        timer: 1500
                      })
                      
                }
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div>
            <div className="my-12 mx-4 flex flex-col-reverse lg:flex-row sm:flex-col-reverse md:flex-col-reverse">
                <div data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" className="card-body border custom-box">
                    <h1 className={`text-3xl font-semibold my-8 ${theme === 'dark' ? 'text-white' : 'text-black'}`} >I appreciate any kind of suggestions or feedback.</h1>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="flex flex-col md:flex-row sm:flex-col">
                            <div className="w-full md:w-1/2 sm:w-full lg:w-1/2 me-4 form-control">
                                <label className="label">
                                    <span className={`label-text font-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Name</span>
                                </label>
                                <input type="text" name="from_name" placeholder="Enter Your Name" className="input input-bordered input-warning" />
                            </div>
                            <div className="w-full md:w-1/2 sm:w-full lg:w-1/2 form-control">
                                <label className="label">
                                    <span className={`label-text font-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Email</span>
                                </label>
                                <input type="text" name="from_email" placeholder="Enter Your Email" className="input input-bordered input-warning" />
                            </div>
                        </div>
                        <div className="w-full form-control">
                            <label className="label">
                                <span className={`label-text font-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Message</span>
                            </label>
                            <textarea name="message" placeholder="Enter Your Message" className="input textarea-warning h-48 text-black"></textarea>
                        </div>
                        <div className="form-control w-[200px]">
                            <button className="mt-8 custom-box btn bg-[#DAA520] hover:bg-[#DAA520] font-bold text-lg">
                                <span className="flex items-center">
                                    Send
                                    <FaPaperPlane className="ml-2"></FaPaperPlane>
                                </span>
                            </button>
                        </div>
                    </form>

                </div>
                <div data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" className="w-[270px] sm:w-[270px] lg:w-[500px]">
                    <Lottie animationData={contactus} loop={true}></Lottie>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
