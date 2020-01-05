import styled from 'styled-components';
import { pixelToRem } from '../../utils/pixelToRem';

export const AboutRedBlob = styled.img`  
  position: absolute;
  top: ${pixelToRem(-60)};
  left: ${pixelToRem(-400)};
  width: ${pixelToRem(400)};    
  z-index: -1;  
`;