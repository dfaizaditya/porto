import React from 'react';
import ProjectBox from './ProjectBox';
import PcBuildy from '../images/pcbuildy.png'
import PredictUs from '../images/predictus.PNG';
import YugiImage from '../images/android.png';
import GramedImage from '../images/Gramed.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={PcBuildy} projectName="PcBuildy" />
        <ProjectBox projectPhoto={PredictUs} projectName="PredictUs" />
        <ProjectBox projectPhoto={YugiImage} projectName="YugiohApp" />
        <ProjectBox projectPhoto={GramedImage} projectName="GramediaApp" />
      </div>

    </div>
  )
}

export default Projects