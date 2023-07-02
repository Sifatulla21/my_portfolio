import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import scrollimg from '../assets/scrollable.png'
import scrollimg2 from '../assets/scrollable2.png'
import scrollimg3 from '../assets/scrollable3.png'
import { FaExternalLinkAlt, FaCode, FaServer, FaLink } from "react-icons/fa";
import Swal from 'sweetalert2'

const ScrollableImage = () => {
    const handleP1 = () =>{
        
        Swal.fire({
            title: 'Sports School',
            html: '<div style="max-height: 500px; overflow-y: auto;">' +
                    '<h4><b>Registration & Login System:</b></h4>' +
                    '<p>Users can easily create an account and log in using their email and password. Additionally, social login options are available for convenient access.</p>' +
                    '<h4><b>Homepage:</b></h4>' +
                    '<p>The homepage showcases a captivating top slider section, providing relevant information, messages, and visuals. It also highlights popular classes based on student engagement.</p>' +
                    '<h4><b>Student Dashboard:</b></h4>' +
                    '<p>Accessible only to students, the private dashboard provides a personalized space. It showcases selected classes and enrolled classes after payment. Students can easily manage their selections, including the ability to delete or pay for selected classes.</p>' +
                    '<h4><b>Payment:</b></h4>' +
                    '<p>Students can make secure payments for selected classes through integrated payment gateways. Upon successful payment, the available seats for the class are updated, and the class is enrolled in the "My Enrolled Classes" section.</p>' +
                    '<h4><b>Payment History:</b></h4>' +
                    '<p>Students have access to a payment history page that displays their previous payments. The history is sorted in descending order, with the most recent payment appearing at the top.</p>' +
                    '<h4><b>Instructor Dashboard:</b></h4>' +
                    '<p>Designed exclusively for instructors, the private dashboard offers powerful tools for managing classes. Instructors can add new classes, view their existing classes, monitor pending/approved/denied statuses, track the total number of enrolled students, and receive feedback. They can also update class details when necessary.</p>' +
                    '<h4><b>Admin Dashboard:</b></h4>' +
                    '<p>Admins have access to a dedicated dashboard for efficiently managing the platform. The dashboard allows admins to handle classes, including approval, denial, and feedback provision to instructors. Additionally, admins can manage users, assign roles, and promote users to instructor or admin status.</p>' +
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
      <div
        className="relative w-[280px] lg:w-[500px] sm:w-[280px] h-[500px] bg-white rounded-lg shadow-lg p-4 overflow-hidden"
        onMouseEnter={() => handleCardHover(0, true)}
        onMouseLeave={() => handleCardHover(0, false)}
      >
        <h2 className="text-lg font-semibold mb-2">Card 1</h2>
        <div className="h-64 overflow-hidden">
          <animated.img
            src={scrollimg}
            alt="Image"
            className="w-full"
            style={scrollAnimation}
          />
        </div>
        <div className="mt-[130px] text-3xl text-xl lg:text-3xl sm:text-xl mt-4 flex justify-center space-x-4">
          <button className="bg-red-500 hover:bg-[#DAA520] text-white px-4 py-2 rounded-lg"> <a target="_blank" href="https://github.com/Sifatulla21/portfolio"><FaCode></FaCode></a>
            
          </button>
          <button className="bg-[#DAA520] hover:bg-red-500 text-white px-4 py-2 rounded-lg"><a target="_blank" href="https://github.com/Sifatulla21/portfolio">
            <FaServer></FaServer></a>
          </button>
          <button className="bg-[#DAA520] hover:bg-red-500 text-white px-4 py-2 rounded-lg"><a target="_blank" href="https://sports-school-71cd4.web.app/">
            <FaLink></FaLink></a>
          </button>
          <button onClick={handleP1} className="bg-red-500 hover:bg-[#DAA520] text-white px-4 py-2 rounded-lg">
            <FaExternalLinkAlt></FaExternalLinkAlt>
          </button>
        </div>
      </div>

      {/* Card 2 */}
      <div
        className="relative w-[280px] lg:w-[500px] sm:w-[280px] h-[500px] bg-white rounded-lg shadow-lg p-4 overflow-hidden"
        onMouseEnter={() => handleCardHover(1, true)}
        onMouseLeave={() => handleCardHover(1, false)}
      >
        <h2 className="text-lg font-semibold mb-2">Card 2</h2>
        <div className="h-64 overflow-hidden">
          <animated.img
            src={scrollimg2}
            alt="Image"
            className="w-full"
            style={scrollAnimation2}
          />
        </div>
        <div className="mt-[130px] text-3xl text-xl lg:text-3xl sm:text-xl mt-4 flex justify-center space-x-4">
          <button className="bg-red-500 hover:bg-[#DAA520] text-white px-4 py-2 rounded-lg"> <a target="_blank" href="https://github.com/Sifatulla21/First-Assignment"><FaCode></FaCode></a>
            
          </button>
          <button className="bg-[#DAA520] hover:bg-red-500 text-white px-4 py-2 rounded-lg">
          <a target="_blank" href="https://github.com/Sifatulla21/First-Assignment"><FaServer></FaServer></a>
            
          </button>
          <button className="bg-[#DAA520] hover:bg-red-500 text-white px-4 py-2 rounded-lg">
          <a target="_blank" href="https://toy-place-80456.web.app/"><FaLink></FaLink></a>
            
          </button>
          <button className="bg-red-500 hover:bg-[#DAA520] text-white px-4 py-2 rounded-lg">
            <FaExternalLinkAlt></FaExternalLinkAlt>
          </button>
        </div>
      </div>

      {/* Card 3 */}
      <div
        className="relative w-[280px] lg:w-[500px] sm:w-[280px] h-[500px] bg-white rounded-lg shadow-lg p-4 overflow-hidden"
        onMouseEnter={() => handleCardHover(2, true)}
        onMouseLeave={() => handleCardHover(2, false)}
      >
        <h2 className="text-lg font-semibold mb-2">Card 3</h2>
        <div className="h-64 overflow-hidden">
          <animated.img
            src={scrollimg3}
            alt="Image"
            className="w-full"
            style={scrollAnimation3}
          />
        </div>
        <div className="mt-[130px] text-3xl text-xl lg:text-3xl sm:text-xl mt-4 flex justify-center space-x-4">
          <button className="bg-red-500 hover:bg-[#DAA520] text-white px-4 py-2 rounded-lg">
              <a target="_blank" href="https://github.com/Sifatulla21/Quran"><FaCode></FaCode></a>
            
          </button>
          <button className="bg-[#DAA520] hover:bg-red-500 text-white px-4 py-2 rounded-lg">
          <a target="_blank" href="https://github.com/Sifatulla21/Quran"><FaServer></FaServer></a>
            
          </button>
          <button className="bg-[#DAA520] hover:bg-red-500 text-white px-4 py-2 rounded-lg">
          <a target="_blank" href="https://chefs-zone-e0bbb.web.app/"><FaLink></FaLink></a>
          </button>
          <button className="bg-red-500 hover:bg-[#DAA520] text-white px-4 py-2 rounded-lg">
            <FaExternalLinkAlt></FaExternalLinkAlt>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScrollableImage;
