import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import scrollimg from '../assets/scrollable.png'
import scrollimg2 from '../assets/scrollable2.png'
import scrollimg3 from '../assets/scrollable3.png'
import { FaExternalLinkAlt, FaCode, FaServer, FaLink } from "react-icons/fa";
import Swal from 'sweetalert2';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ScrollableImage = () => {
  useEffect(() => {
    AOS.init();
}, []);
    const handleP1 = () =>{
        Swal.fire({
            title: 'Sports School',
            html: '<div style="overflow-y: auto;">' +
                    '<h1><b>Easy email/password login.</b></h1>' +
                    '<h1><b> Student Dashboard for class management (selection, deletion, payment).</b></h1>' +
                    '<h1><b> Instructor Dashboard with class tools (add, view, update).</b></h1>' +
                    '<h1><b>Admin Dashboard for class approval/feedback, user management/roles.</b></h1>' +
                  '</div>',
            showCloseButton: true,
            showConfirmButton: false,
          });
          
          
    }
  const [hovered, setHovered] = useState([false, false, false]);

  const handleCardHover = (index, isHovered) => {
    const updatedHovered = [...hovered];
    updatedHovered[index] = isHovered;
    setHovered(updatedHovered);
  };

  const scrollAnimation = useSpring({
    transform: `translateY(${hovered[0] ? '-80%' : '0%'})`,
    config: { duration: 2000 },
  });

  const scrollAnimation2 = useSpring({
    transform: `translateY(${hovered[1] ? '-80%' : '0%'})`,
    config: { duration: 2000 },
  });

  const scrollAnimation3 = useSpring({
    transform: `translateY(${hovered[2] ? '-80%' : '0%'})`,
    config: { duration: 2000 },
  });

  return (
    <div className="mb-12  ms-12 sm:ms-12 lg:ms-2 grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Card 1 */}
      <div data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600"
        className="relative w-[280px] lg:w-[500px] sm:w-[280px] h-[700px] bg-white rounded-lg shadow-lg p-4 overflow-hidden"
        onMouseEnter={() => handleCardHover(0, true)}
        onMouseLeave={() => handleCardHover(0, false)}
      ><div className="h-[400px] custom-box overflow-hidden">
          <animated.img
            src={scrollimg}
            alt="Image"
            className="w-full"
            style={scrollAnimation}
          />
        </div>
        <h1 className="text-3xl font-bold mt-8">Sports School</h1>
        <div className="mt-[150px] text-3xl text-xl lg:text-3xl sm:text-xl mt-4 flex justify-center space-x-4">
          <button className="bg-red-500 custom-box2 hover:bg-[#DAA520] text-white px-4 py-2 rounded-lg"> <a target="_blank" href="https://github.com/Sifatulla21/portfolio"><FaCode></FaCode></a>
            
          </button>
          <button className="bg-[#DAA520] custom-box hover:bg-red-500 text-white px-4 py-2 rounded-lg"><a target="_blank" href="https://github.com/Sifatulla21/portfolio">
            <FaServer></FaServer></a>
          </button>
          <button className="bg-[#DAA520] custom-box hover:bg-red-500 text-white px-4 py-2 rounded-lg"><a target="_blank" href="https://sports-school-71cd4.web.app/">
            <FaLink></FaLink></a>
          </button>
          <button onClick={handleP1} className="bg-red-500 custom-box2 hover:bg-[#DAA520] text-white px-4 py-2 rounded-lg">
            <FaExternalLinkAlt></FaExternalLinkAlt>
          </button>
        </div>
      </div>

      {/* Card 2 */}
      <div data-aos="fade-down" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600"
        className="relative w-[280px] lg:w-[500px] sm:w-[280px] h-[700px] bg-white rounded-lg shadow-lg p-4 overflow-hidden"
        onMouseEnter={() => handleCardHover(1, true)}
        onMouseLeave={() => handleCardHover(1, false)}
      >
        <div className="h-[400px] custom-box2 overflow-hidden">
          <animated.img
            src={scrollimg2}
            alt="Image"
            className="w-full"
            style={scrollAnimation2}
          />
        </div>
        <h1 className="text-3xl font-bold mt-8">Toy Palace</h1>
        <div className="mt-[150px] text-3xl text-xl lg:text-3xl sm:text-xl mt-4 flex justify-center space-x-4">
          <button className="bg-red-500 custom-box2 hover:bg-[#DAA520] text-white px-4 py-2 rounded-lg"> <a target="_blank" href="https://github.com/Sifatulla21/First-Assignment"><FaCode></FaCode></a>
            
          </button>
          <button className="bg-[#DAA520] custom-box hover:bg-red-500 text-white px-4 py-2 rounded-lg">
          <a target="_blank" href="https://github.com/Sifatulla21/First-Assignment"><FaServer></FaServer></a>
            
          </button>
          <button className="bg-[#DAA520] custom-box hover:bg-red-500 text-white px-4 py-2 rounded-lg">
          <a target="_blank" href="https://toy-place-80456.web.app/"><FaLink></FaLink></a>
            
          </button>
          <button className="bg-red-500 custom-box2 hover:bg-[#DAA520] text-white px-4 py-2 rounded-lg">
            <FaExternalLinkAlt></FaExternalLinkAlt>
          </button>
        </div>
      </div>

      {/* Card 3 */}
      <div data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600"
        className="relative w-[280px] lg:w-[500px] sm:w-[280px] h-[700px] bg-white rounded-lg shadow-lg p-4 overflow-hidden custom-box"
        onMouseEnter={() => handleCardHover(2, true)}
        onMouseLeave={() => handleCardHover(2, false)}
      >
        <div className="h-[400px] custom-box overflow-hidden">
          <animated.img
            src={scrollimg3}
            alt="Image"
            className="w-full"
            style={scrollAnimation3}
          />
        </div>
        <h1 className="text-3xl font-bold mt-8">Chefs Zone</h1>
        <div className="mt-[150px] text-3xl text-xl lg:text-3xl sm:text-xl mt-4 flex justify-center space-x-4">
          <button className="bg-red-500 custom-box2 hover:bg-[#DAA520] text-white px-4 py-2 rounded-lg">
              <a target="_blank" href="https://github.com/Sifatulla21/Quran"><FaCode></FaCode></a>
            
          </button>
          <button className="bg-[#DAA520] custom-box hover:bg-red-500 text-white px-4 py-2 rounded-lg">
          <a target="_blank" href="https://github.com/Sifatulla21/Quran"><FaServer></FaServer></a>
            
          </button>
          <button className="bg-[#DAA520] custom-box hover:bg-red-500 text-white px-4 py-2 rounded-lg">
          <a target="_blank" href="https://chefs-zone-e0bbb.web.app/"><FaLink></FaLink></a>
          </button>
          <button className="bg-red-500 custom-box2 hover:bg-[#DAA520] text-white px-4 py-2 rounded-lg">
            <FaExternalLinkAlt></FaExternalLinkAlt>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScrollableImage;
