import React, { useEffect, useRef } from 'react'
import { HamburguerMenuContainer } from '../atoms/HamburguerMenuContainer';
import { HamburguerMenuWrapper } from '../atoms/HamburguerMenuWrapper';
import { HamburguerMenuText } from '../atoms/HamburguerMenuText';
// @ts-ignore
import { TweenMax, gsap, Circ } from 'gsap/dist/gsap';

export interface IHamburguerMenu {
  menuName?: string;
  isActive: boolean;
  initial?: boolean;
}

// TODO add type
export const HamburguerMenu = ({state}: any) => {
  let hamburguerMenu: any = useRef(null)

  useEffect(() => {    
    console.log(state.isActive);
    if(state.isActive === false){
      TweenMax.to(hamburguerMenu, .7, {clipPath: `circle(16px at 84.3% 9%)`, ease: Circ.easeInOut});      
      gsap.to(hamburguerMenu, {duration: .7, css: {display: "none"}});
    }
    else if(state.isActive === true || (state.isActive === true && state.initial === null)){
      gsap.to(hamburguerMenu, {duration: 0, css: {display: "block"}});
      TweenMax.to(hamburguerMenu, 1, {clipPath: `circle(2000px at 84.3% 10%)`, ease: Circ.easeInOut});      
    }
  });

  return (
    <HamburguerMenuContainer ref={elem => {hamburguerMenu = elem}}>
      <HamburguerMenuWrapper>
        <HamburguerMenuText>Home</HamburguerMenuText>
        <HamburguerMenuText>About Me</HamburguerMenuText>
        <HamburguerMenuText>Skills</HamburguerMenuText>
        <HamburguerMenuText>Projects</HamburguerMenuText>
      </HamburguerMenuWrapper>
    </HamburguerMenuContainer>
  )
}
