import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import './Projects.css';
import '../Skills/Skills.css';
import { FaExternalLinkAlt, FaCode, FaServer, FaLink } from "react-icons/fa";
import Swal from 'sweetalert2';
import img1 from '../../assets/scrollable.png';
import img2 from '../../assets/scrollable2.png';
import img3 from '../../assets/scrollable3.png';

const Projects = () => {
  const [slidesPerView, setSlidesPerView] = useState(3);
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 640) {
        setSlidesPerView(2);
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(3);
      } else {
        setSlidesPerView(3);
      }
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const handleP1 = () => {
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
  const handleP2 = () => {
    Swal.fire({
      title: 'Toy Palace',
      html: '<div style="overflow-y: auto;">' +
        '<h1><b>On this site we can see a lot of toy.</b></h1>' +
        '<h1><b>We can see all the toys by category.</b></h1>' +
        '<h1><b> There is a gallery section on home page.</b></h1>' +
        '<h1><b>We can login with email password and google also.</b></h1>' +
        '<h1><b>We can add toy(CREATE).</b></h1>' +
        '<h1><b>We can edit and delete toy(UPDATE and DELETE).</b></h1>' +
        '<h1><b>We can see all the users added toy(READ)' +
        '</div>',
      showCloseButton: true,
      showConfirmButton: false,
    });
  }
  const handleP3 = () => {
    Swal.fire({
      title: 'Chefs Zone',
      html: '<div style="overflow-y: auto;">' +
        '<h1><b>On this site we can see a specific countries chef.</b></h1>' +
        '<h1><b>We can see all the chefs details and their reciepes.</b></h1>' +
        '<h1><b>There is a blog page where we can make the pdf of that page and dwonload that pdf.</b></h1>' +
        '<h1><b>We can login with email password,  google, and git hub.</b></h1>' +
        '</div>',
      showCloseButton: true,
      showConfirmButton: false,
    });
  }
  return (
    <div id="projects">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={slidesPerView}
        coverflowEffect={{
          rotate: 50,
          stretch: 1,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper custom-box"
        initialSlide={1}
      >
        <SwiperSlide>
          <div className="card w-[230px] sm:w-[230px] md:w-[300px]
 lg:w-[500px] bg-base-100 border shadow-2xl ml-8 sm:ml-8 md:ml-0 lg:ml-0">
            <div class="container mt-4 p-4">
              <div class="content">
                <div class="screen custom-box">
                  <img src={img1} />
                </div>

              </div>
            </div>
            <div className="card-body">
              <h1 className="text-3xl font-bold mt-8">Toy Palace</h1>
              <div className="text-xs lg:text-3xl sm:text-xs mt-12 flex justify-center space-x-4">
                <button className="bg-[#DAA520] custom-box hover:bg-red-500 text-white px-4 py-2 rounded-lg">
                  <a target="_blank" href="https://toy-place-80456.web.app/">Live Site</a>

                </button>
                <button onClick={handleP2} className="bg-red-500 custom-box2 hover:bg-[#DAA520] text-white px-4 py-2 rounded-lg">
                  Details
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card w-[230px] sm:w-[230px] md:w-[300px]
 lg:w-[500px] bg-base-100 border shadow-2xl ml-8 sm:ml-8 md:ml-0 lg:ml-2">
            <div class="container mt-4 p-4">
              <div class="content">
                <div class="screen custom-box">
                  <img src={img2} />
                </div>

              </div>
            </div>
            <div className="card-body">
              <h1 className="text-3xl font-bold mt-8">Sports School</h1>
              <div className="text-xs lg:text-3xl sm:text-xs mt-12 flex justify-center space-x-4">
                <button className="bg-[#DAA520] custom-box hover:bg-red-500 text-white px-4 py-2 rounded-lg"><a target="_blank" href="https://sports-school-71cd4.web.app/">
                  Live Site</a>
                </button>
                <button onClick={handleP1} className="bg-red-500 custom-box2 hover:bg-[#DAA520] text-white px-4 py-2 rounded-lg">
                  Details
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card w-[230px] sm:w-[230px] md:w-[300px]
 lg:w-[500px] bg-base-100 border shadow-xl ml-8 sm:ml-8 md:ml-20 lg:ml-2">
            <div class="container mt-4 p-4">
              <div class="content">
                <div class="screen custom-box">
                  <img src={img3} />
                </div>

              </div>
            </div>
            <div className="card-body">
              <h1 className="text-3xl font-bold mt-8">Chefs Zone</h1>
              <div className="text-xs lg:text-3xl sm:text-xs mt-12 flex justify-center space-x-4">
                <button className="bg-[#DAA520] custom-box hover:bg-red-500 text-white px-4 py-2 rounded-lg">
                  <a target="_blank" href="https://chefs-zone-e0bbb.web.app/">Live Site</a>
                </button>
                <button onClick={handleP3} className="bg-red-500 custom-box2 hover:bg-[#DAA520] text-white px-4 py-2 rounded-lg">
                  Details
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Projects;