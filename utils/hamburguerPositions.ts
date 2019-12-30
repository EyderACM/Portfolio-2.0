import { eposition } from '../Components/atoms/HamburguerLine';

export const determineHamburguerLineRotation = (position: eposition, active: boolean) => {
  if(!active) return "0";

  switch(position){    
    case eposition.MIDDLE: case eposition.BOTTOM: return "-45deg"; break;
    case eposition.TOP: return "45deg"; break;  
  }; 
}

export const determineHamburguerLineHeight = (position: eposition) => {
  return position === eposition.BOTTOM || position === eposition.MIDDLE ? -2.82 : -4.3;
}