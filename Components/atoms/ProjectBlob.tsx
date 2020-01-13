import styled from 'styled-components';
import { pixelToRem } from '../../utils/pixelToRem';

export interface IProjectBlob {
  top: number;
  left?: number;
  right?: number;
  width: number;
}

export const ProjectBlob = styled.img(({top, left, right, width}: IProjectBlob) => `
  position: absolute;
  top: ${pixelToRem(top)};
  left: ${left ? pixelToRem(left) : "auto"};
  right: ${right ? pixelToRem(right) : "auto"};
  width: ${pixelToRem(width)};
  z-index: -1;  
`);