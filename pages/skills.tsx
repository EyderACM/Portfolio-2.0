import React, { useRef, useEffect } from 'react'
import { AboutmeWrapper } from '../Components/atoms/AboutmeWrapper'
import { SectionTitle } from '../Components/atoms/SectionTitle'
import { SkillBlocksWrapper } from '../Components/atoms/SkillBlocksWrapper'
import { ListTitle } from '../Components/atoms/ListTitle';
import { SkillElement } from '../Components/atoms/SkillElement';
import { SkillsList } from '../Components/atoms/SkillsList';
import { ProjectBlob } from '../Components/atoms/ProjectBlob';
import { pixelToRem } from '../utils/pixelToRem';
// @ts-ignore
import blueBlobImg from '../static/images/blueBlob.svg';
// @ts-ignore
import orangeBlobImg from '../static/images/orangeBlob.svg';
// @ts-ignore
import redBlobImg from '../static/images/redBlob.svg';
// @ts-ignore
import { Circ, TimelineMax, TweenMax } from 'gsap/dist/gsap';

const Skills = () => {

  let blueBlob: any = useRef(null);
  let orangeBlob: any = useRef(null);
  let redBlob: any = useRef(null);

  const tl = new TimelineMax({delay: 1}); 

  useEffect(() => {
    tl.to(orangeBlob, .6, { left: `${pixelToRem(-300)}`, ease: Circ.easeOut});
    tl.to(redBlob, .6, { right: `${pixelToRem(-300)}`, ease: Circ.easeOut});  
    tl.to(blueBlob, .6, { left: `${pixelToRem(-255)}`, ease: Circ.easeOut});  
  });

  return (
    <AboutmeWrapper>
      <ProjectBlob ref={el => {orangeBlob = el}} src={orangeBlobImg} width={550} top={-60} left={-450}/>
      <ProjectBlob ref={el => {redBlob = el}} src={redBlobImg} width={550} top={250} right={-450}/>
      <ProjectBlob ref={el => {blueBlob = el}} src={blueBlobImg} width={400} top={560} left={-450}/>
      <SectionTitle>Skills</SectionTitle>
      <SkillBlocksWrapper>
          <SkillsList>
            <ListTitle>#Frontend</ListTitle>
            <SkillElement>Javascript</SkillElement>
            <SkillElement>Java</SkillElement>
            <SkillElement>Flutter</SkillElement>
            <SkillElement>ReactJs</SkillElement>
            <SkillElement>React Native</SkillElement>
            <SkillElement>jQuery</SkillElement>
            <SkillElement>HTML </SkillElement>
            <SkillElement>(S)CSS</SkillElement>
            <SkillElement>Tailwind</SkillElement>
            <SkillElement>Bootstrap</SkillElement>
            <SkillElement>Handlebars</SkillElement>
          </SkillsList>
          <SkillsList>
            <ListTitle>#Backend</ListTitle>
            <SkillElement>NodeJs</SkillElement>
            <SkillElement>MongoDB</SkillElement>
            <SkillElement>Firebase</SkillElement>
            <SkillElement>Express</SkillElement>
            <SkillElement>Loopback</SkillElement>
            <SkillElement>CRUD Operations</SkillElement>            
          </SkillsList>
          <SkillsList>
            <ListTitle>#Me</ListTitle>
            <SkillElement>Great at reading while commuting</SkillElement>
            <SkillElement>Music lover (metal or cumbia, doesn't matter)</SkillElement>
            <SkillElement>Avid meme consumer</SkillElement>
            <SkillElement>Used to make videos about videogame mysteries</SkillElement>
            <SkillElement>Loves bad puns and dad jokes at just 19</SkillElement>
          </SkillsList>
      </SkillBlocksWrapper>
    </AboutmeWrapper>
  )
}

export default Skills
