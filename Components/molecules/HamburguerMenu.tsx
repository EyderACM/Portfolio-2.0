import React from 'react'
import { HamburguerMenuContainer } from '../atoms/HamburguerMenuContainer';
import { HamburguerMenuWrapper } from '../atoms/HamburguerMenuWrapper';
import { HamburguerMenuText } from '../atoms/HamburguerMenuText';
import { HamburguerMenuTextQuote } from '../atoms/HamburguerMenuTextQuote';

export const HamburguerMenu = () => {
  return (
    <HamburguerMenuContainer>
      <HamburguerMenuWrapper>
        <HamburguerMenuText>Home</HamburguerMenuText>
        <HamburguerMenuText>About Me</HamburguerMenuText>
        <HamburguerMenuText>Skills</HamburguerMenuText>
        <HamburguerMenuText>Projects</HamburguerMenuText>
      </HamburguerMenuWrapper>
    </HamburguerMenuContainer>
  )
}
