import React, { RefObject } from 'react'
import { SingleProjectWrapper } from '../atoms/SingleProjectWrapper'
import { ProjectImage } from '../atoms/ProjectImage'
import { ProjectDetailsContainer } from '../atoms/ProjectDetailsContainer';
import { ProjectTitle } from '../atoms/ProjectTitle';
import { ProjectDescription } from '../atoms/ProjectDescription';

interface IProject {
  projectTitle: string;
  projectDescription: string;
  projectImage: any;
}

export const Project = ({projectTitle, projectDescription, projectImage}: any) => {
  return (
    <SingleProjectWrapper>
      <ProjectImage src={projectImage}/>
      <ProjectDetailsContainer>
        <ProjectTitle>{projectTitle}</ProjectTitle>
        <ProjectDescription>
          {projectDescription}        
        </ProjectDescription>
      </ProjectDetailsContainer>
    </SingleProjectWrapper>
  )
}
