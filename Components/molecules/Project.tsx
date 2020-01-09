import React from 'react'
import { SingleProjectWrapper } from '../atoms/SingleProjectWrapper'
import { ProjectImage } from '../atoms/ProjectImage'
import { ProjectDetailsContainer } from '../atoms/ProjectDetailsContainer';
import { ProjectTitle } from '../atoms/ProjectTitle';
import { ProjectDescription } from '../atoms/ProjectDescription';
// @ts-ignore
import bepensaWorld from '../../static/images/projects/bepensaWorld.svg';

export const Project = () => {
  return (
    <SingleProjectWrapper>
      <ProjectImage src={bepensaWorld}/>
      <ProjectDetailsContainer>
        <ProjectTitle>Bepensa World</ProjectTitle>
        <ProjectDescription>
          This project was developed using Flutter for the hackathon "Hacksureste", it
          determines which convenience stores are potential clients within certain range, calculated
          with both a national and business database.
          This way simplifying the process of looking for clients to a national beverages chain.
          <br/>                    
        </ProjectDescription>
      </ProjectDetailsContainer>
    </SingleProjectWrapper>
  )
}
