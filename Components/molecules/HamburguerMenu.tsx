import React, { useEffect, useRef } from 'react'
import { HamburguerMenuContainer } from '../atoms/HamburguerMenuContainer';
import { HamburguerMenuWrapper } from '../atoms/HamburguerMenuWrapper';
import { HamburguerMenuText } from '../atoms/HamburguerMenuText';
// @ts-ignore
import { TweenMax, gsap, Circ, Back } from 'gsap/dist/gsap';
import { pixelToRem } from '../../utils/pixelToRem';
// @ts-ignore

export interface IHamburguerMenu {
  menuName?: string;
  isActive: boolean;
  initial?: boolean;
}

// TODO add type
export const HamburguerMenu = ({ state }: any) => {
  let hamburguerMenu: any = useRef(null);

  useEffect(() => {
    const hamburguerPosition = `${pixelToRem(window.innerWidth - 55)}`;
    if (state.isActive === false) {
      TweenMax.to(hamburguerMenu, .7, { css: { clipPath: `circle(${pixelToRem(19)} at ${hamburguerPosition} ${pixelToRem(55)})` }, ease: Circ.easeInOut });
      gsap.to(hamburguerMenu, { duration: .7, css: { display: "none" } });
    }
    else if (state.isActive === true || (state.isActive === true && state.initial === null)) {
      gsap.to(hamburguerMenu, { duration: 0, css: { display: "block" } });
      TweenMax.fromTo(hamburguerMenu, 1, { css: { clipPath: `circle(${pixelToRem(2)} at ${hamburguerPosition} ${pixelToRem(55)})` }} ,{ css: { clipPath: `circle(${pixelToRem(1100)} at ${hamburguerPosition} ${pixelToRem(55)})` }, ease: Circ.easeInOut });
    }
  });

  return (
    <HamburguerMenuContainer ref={elem => { hamburguerMenu = elem }}>
      <HamburguerMenuWrapper>
        <HamburguerMenuText>Home</HamburguerMenuText>
        <HamburguerMenuText>About Me</HamburguerMenuText>
        <HamburguerMenuText>Skills</HamburguerMenuText>
        <HamburguerMenuText>Projects</HamburguerMenuText>
      </HamburguerMenuWrapper>
    </HamburguerMenuContainer>
  )
}
