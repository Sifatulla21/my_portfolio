import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useContext, useEffect } from 'react';
import { ThemeContext } from '../Provider/ThemeProvider';

import reactbg from '../../assets/react.png';
import bootstrap from '../../assets/bootstrap.png';
import tailwind from '../../assets/tailwind.png';
import html from '../../assets/html.png';
import css from '../../assets/css.png';
import js from '../../assets/js.png';
import node from '../../assets/node.png';
import express from '../../assets/express.png';
import mongodb from '../../assets/mongodb.png';
import vs from '../../assets/vs.png';
import axios from '../../assets/axios.png';
import jwt from '../../assets/jwt.png';
import router from '../../assets/react-router.png';
import vercel from '../../assets/vercel.png';
import netlify from '../../assets/netlify.png';
import firebase from '../../assets/firebase.png';
import figma from '../../assets/figma.png';
import github from '../../assets/github.png';
import npm from '../../assets/npm.png';
import './Skills.css';

const Skills = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const { theme } = useContext(ThemeContext);

  const skillsData = [
    { name: 'HTML', image: html },
    { name: 'CSS', image: css },
    { name: 'Botstrap', image: bootstrap },
    { name: 'Tailwind', image: tailwind },
    { name: 'Java Script', image: js },
    { name: 'React JS', image: reactbg },
    { name: 'Node JS', image: node },
    { name: 'Express JS', image: express },
    { name: 'MongoDB', image: mongodb },
    { name: 'React Router', image: router },
    { name: 'Axios', image: axios },
    { name: 'JWT', image: jwt },
    { name: 'Node Package Manager', image: npm },
    { name: 'Firebase', image: firebase },
    { name: 'Vercel', image: vercel },
    { name: 'Netlify', image: netlify },
    { name: 'VS Code', image: vs },
    { name: 'Git Hub', image: github },
    { name: 'Figma', image: figma },
  ];

  return (
    <div id="skills" className="ms-2 md:ms-8 container mx-auto py-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-0 gap-y-8">
      {skillsData.map((skill, index) => (
        <div
          key={index}
          data-aos="fade-down-right"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
          className="h-32 w-32 sm:w-32 lg:w-48 sm:h-32 lg:h-48 border p-4 custom-box mx-auto sm:mx-0"
        >
          <div className="photo-item">
            <img className="zoom-box" src={skill.image} alt={skill.name} />
            <div className="caption">{skill.name}</div>
          </div>

        </div>
      ))}
    </div>
  );
};

export default Skills;
