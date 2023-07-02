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
import './Skills.css'

const Skills = () => {
    
      return (
        <div id="skills" className="container mx-auto py-8 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-0 gap-y-8">
              <div className="h-48 w-48 border p-4 custom-box mx-auto sm:mx-0">
              <img className="zoom-box" src={html} alt="" />
              </div>
              <div className="h-48 w-48 border p-4 custom-box mx-auto sm:mx-0">
              <img className="zoom-box" src={css} alt="" />
              </div>
              <div className="h-48 w-48 border p-4 custom-box mx-auto sm:mx-0">
              <img className="zoom-box" src={bootstrap} alt="" />
              </div>
              <div className="h-48 w-48 border p-4 custom-box mx-auto sm:mx-0">
              <img className="zoom-box" src={tailwind} alt="" />
              </div>
              <div className="h-48 w-48 border p-4 custom-box mx-auto sm:mx-0">
              <img className="zoom-box" src={js} alt="" />
              </div>
              <div className="h-48 w-48 border p-4 custom-box mx-auto sm:mx-0">
              <img className="zoom-box" src={reactbg} alt="" />
              </div>
              <div className="h-48 w-48 border p-4 custom-box mx-auto sm:mx-0">
              <img className="zoom-box" src={node} alt="" />
              </div>
              <div className="h-48 w-48 border p-4 custom-box mx-auto sm:mx-0">
              <img className="zoom-box" src={express} alt="" />
              </div>
              <div className="h-48 w-48 border p-4 custom-box mx-auto sm:mx-0">
              <img className="zoom-box" src={mongodb} alt="" />
              </div>
              <div className="h-48 w-48 border p-4 custom-box mx-auto sm:mx-0">
              <img className="zoom-box" src={router} alt="" />
              </div>
              <div className="h-48 w-48 border p-4 custom-box mx-auto sm:mx-0">
              <img className="zoom-box" src={axios} alt="" />
              </div>
              <div className="h-48 w-48 border p-4 custom-box mx-auto sm:mx-0">
              <img className="zoom-box" src={jwt} alt="" />
              </div>
              <div className="h-48 w-48 border p-4 custom-box mx-auto sm:mx-0">
              <img className="zoom-box" src={firebase} alt="" />
              </div>
              <div className="h-48 w-48 border p-4 custom-box mx-auto sm:mx-0">
              <img className="zoom-box" src={vercel} alt="" />
              </div>
              <div className="h-48 w-48 border p-4 custom-box mx-auto sm:mx-0">
              <img className="zoom-box" src={netlify} alt="" />
              </div>
              <div className="h-48 w-48 border pt-12 custom-box mx-auto sm:mx-0">
              <img className="zoom-box" src={vs} alt="" />
              </div>
              <div className="h-48 w-48 border pt-12 custom-box mx-auto sm:mx-0">
              <img className="zoom-box" src={figma} alt="" />
              </div>
        </div>
      );
    };

export default Skills;