import React, { useRef, useEffect, useLayoutEffect } from 'react'
import { AboutmeWrapper } from '../Components/atoms/AboutmeWrapper'
import { ProjectsSectionTitle } from '../Components/atoms/ProjectsSectionTitle'
import { Project } from '../Components/molecules/Project';
import { pixelToRem } from '../utils/pixelToRem';
import { createGlobalStyle } from 'styled-components';

// @ts-ignore
import bepensaWorld from '../static/images/projects/bepensaWorld.svg';
// @ts-ignore
import frugalist from '../static/images/projects/frugalist.svg';
// @ts-ignore
import kayapp from '../static/images/projects/kayapp.svg';
// @ts-ignore
import linkedon from '../static/images/projects/linkedOn.svg';
// @ts-ignore
import baseConverter from '../static/images/projects/calculator.svg';
// @ts-ignore
import { Circ, TimelineMax, Power3, gsap } from 'gsap/dist/gsap';
// @ts-ignore
import redBlobImg from '../static/images/redBlob.svg';
// @ts-ignore
import blueBlobImg from '../static/images/blueBlob.svg';

const Projects = () => {

  // To change blobs to different ones
  let redBlob: any = useRef(null);
  let blueBlob: any = useRef(null);

  const elref: any = useRef([]);

  const tl = new TimelineMax({delay: 1}); 
  const GlobalStyle = createGlobalStyle`  
  html {
    overflow-x: hidden;      
    margin-right: calc(-1 * (100vw - 100%));
  }
  `   

  useEffect(() => {
    tl.to(redBlob, .8, { left: `${pixelToRem(-250)}`, ease: Circ.easeOut});
    tl.to(blueBlob, .8, { right: `${pixelToRem(-270)}`, ease: Circ.easeOut}, "-=.5");    
  }, []);  

  useLayoutEffect(() => {
    if(elref.current){
      elref.current.map((element: any) => {
        tl.from(element, .7, {y: 30, opacity: 0, ease: Circ.easeOut}, "-=.5");
      });      
      return;
    }
  })

  const projects = [
  {
    projectTitle: "Base Converter",
    projectDescription: `A React-Native app made using styled-components. It converts any base16 to another base16 number providing a quick transforming tool for students' use.`,
    projectImage: baseConverter
  },
  {
    projectTitle: "Frugalist",
    projectDescription: `This application determines the price of a certain object in different supermarkets in Mexico, 
    it was developed with Flutter, and it implements a web scraper made with NodeJs, and an image 
    classifier with tensorflowJs to detect a product by its photo and determine its price.`,
    projectImage: frugalist
  },
  {
    projectTitle: "Kayapp",
    projectDescription: `This system was developed after a project presented at a social good project competition.
    It allows fisherman to sell their product without and intermediary and provides a better management and interaction
    with their potential buyers. It uses loopback 4 as an API and a client implemented with Handlebars and Tailwind`,
    projectImage: kayapp
  },
  {
    projectTitle: "Bepensa World",
    projectDescription: `This project was developed using Flutter for the hackathon "Hacksureste", it
    determines which convenience stores are potential clients within certain range, calculated
    with both a national and business database.
    This way simplifying the process of looking for clients to a national beverages chain.`,
    projectImage: bepensaWorld
  },
  {
    projectTitle: "LinkedOn",
    projectDescription: `An under construction Full-Stack React made webapp that uses Mongodb, Nodejs, Typescript, Redux and Styled-Components. 
    A social-media that provides students in your area a place to share their learning and growth in their career.`,
    projectImage: linkedon
  }   
]  

  return (
    <AboutmeWrapper>
      <GlobalStyle />
      <ProjectsSectionTitle>Projects</ProjectsSectionTitle>
      <div>
        {projects.map((singleProject, index) => {          
          return <div ref={(el: any) => {elref.current[index] = el}}><Project projectTitle={singleProject.projectTitle} projectDescription={singleProject.projectDescription} projectImage={singleProject.projectImage}/></div>
        })}
      </div>
    </AboutmeWrapper>
  )
}

export default Projects
