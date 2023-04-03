import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    YugiohAppDesc : "Android application for yugioh card games. Implementing feature to Browse cards data from yugioh database API.",
    YugiohAppGithub : "https://github.com/dfaizaditya/Yugioh",
    YugiohAppWebsite : "",

    PredictUsDesc : "A Web application for Predicting next value of numbers Sequence. Build using react and hashkell. This projeject was a group project to complete the fungsional programing end exam",
    PredictUsGithub : "https://gitlab.com/predicting-with-us",
    PredictUsWebsite : "https://predicting-with-us.netlify.app/",

    PcBuildyDesc:"A Web application for building a personal computer(PC) based on budged optimization • Using BFS algorithm • Used: React, Django",
    PcBuildyGithub:"",
    PcBuildyWebsite:"https://newsletter-signup-teal.vercel.app/",

    GramediaAppDesc:"A mockup design for bookstore redesigning project. Used gramedia feature and pallete as refreence",
    GramediaAppGithub:"",
  }

  let show ='';
  if(desc[projectName + 'Github']==""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

            <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank'>
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

            <a href={desc[projectName + 'Website']} target='_blank'>
              <button className='projectbtn'><CgFileDocument/> Demo</button>
            </a>
        </div>
    </div>
  )
}

export default  ProjectBox