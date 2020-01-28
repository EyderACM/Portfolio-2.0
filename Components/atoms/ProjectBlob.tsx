import styled from 'styled-components';
import { pixelToRem } from '../../utils/pixelToRem';

export interface IProjectBlob {
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
  width: number;
}

export const ProjectBlob = styled.img(({top, left, right, bottom, width}: IProjectBlob) => `
  position: absolute;
  bottom: ${bottom ? pixelToRem(bottom) : "auto"}; 
  top: ${top ? pixelToRem(top) : "auto"};
  left: ${left ? pixelToRem(left) : "auto"};
  right: ${right ? pixelToRem(right) : "auto"};
  width: ${pixelToRem(width)};
  z-index: -1;  
`);