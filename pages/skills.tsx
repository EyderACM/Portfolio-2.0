import React from 'react'
import { AboutmeWrapper } from '../Components/atoms/AboutmeWrapper'
import { SectionTitle } from '../Components/atoms/SectionTitle'
import { SkillBlocksWrapper } from '../Components/atoms/SkillBlocksWrapper'
import { ListTitle } from '../Components/atoms/ListTitle';
import { SkillElement } from '../Components/atoms/SkillElement';
import { SkillsList } from '../Components/atoms/SkillsList';

const Skills = () => {
  return (
    <AboutmeWrapper>
      <SectionTitle>Skills</SectionTitle>
      <SkillBlocksWrapper>
          <SkillsList>
            <ListTitle>#Frontend</ListTitle>
            <SkillElement>Javascript</SkillElement>
            <SkillElement>ReactJs</SkillElement>
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
