import React from 'react';
import Skills from '../Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Backend from './Backend';
import Frontend from './Frontend';
import './about.css';
import Skillset from './Skillset.jsx';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
            Hi, my name is <b>Dimas Aditya</b> and I am from Tangerang, Indonesia.
            I'm a <b>Software Engineer</b> and a computer science graduate in 2022 from <b>University of Indonesia</b>. <br/><br/>
            I have working at KB bukopin mt.haryono as <b>Software Engineer</b> using java.
            I do mostly web development project and create a consumeable api. I also capable to 
            build a frontend product with react js<br/><br/>
            I am <b>open</b> to explore new thing so I can contribute and grow.<br/> 
            </p>
        </div>
      </div>
      
      <h1 className='SkillsHeading'>Proffesional Skillset</h1>
      <Skillset/>
      <div className='skills'>
        
        <Skills skill='React' />
        <Skills skill='Node' />
        <Skills skill='MongoDb' />
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Javascript' />
        <Skills skill='Java' />
        <Skills skill='Python' />
        <Skills skill='Figma' />
        <Skills skill='Vercel' />
        <Skills skill='Npm' />
        <Skills skill='Bootstrap'/>
        
      </div>
    </>
  )
}

export default About