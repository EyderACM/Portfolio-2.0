import styled from 'styled-components';
import { pixelToRem } from '../../utils/pixelToRem';

export const AboutBlueBlob = styled.img`  
  position: absolute;
  top: ${pixelToRem(450)};
  right: ${pixelToRem(-400)};
  width: ${pixelToRem(400)};    
  z-index: -1;  
`;