import React from 'react'
import { AboutmeWrapper } from '../Components/atoms/AboutmeWrapper'
import { SectionTitle } from '../Components/atoms/SectionTitle'
import { SkillBlocksWrapper } from '../Components/atoms/SkillBlocksWrapper'
import { ListTitle } from '../Components/atoms/ListTitle';

const Skills = () => {
  return (
    <AboutmeWrapper>
      <SectionTitle>Skills</SectionTitle>
      <SkillBlocksWrapper>
        <ListTitle>#Frontend</ListTitle>
          <ul>
            <li>sdsdsd</li>          
          </ul>
      </SkillBlocksWrapper>
    </AboutmeWrapper>
  )
}

export default Skills
