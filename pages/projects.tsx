import React from 'react'
import { AboutmeWrapper } from '../Components/atoms/AboutmeWrapper'
import { ProjectsSectionTitle } from '../Components/atoms/ProjectsSectionTitle'
import { Project } from '../Components/molecules/Project';

const Projects = () => {
  return (
    <AboutmeWrapper>
      <ProjectsSectionTitle>Projects</ProjectsSectionTitle>
      <div>
        <Project></Project>
      </div>
    </AboutmeWrapper>
  )
}

export default Projects
