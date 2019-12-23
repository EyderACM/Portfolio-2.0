import styled from 'styled-components';
import { pixelToRem } from '../../utils/pixelToRem';

export const BlueBlobImage = styled.img`  
  position: absolute;
  top: ${pixelToRem(-60)};
  left: ${pixelToRem(-220)};
  width: ${pixelToRem(400)};    
  z-index: -1;  
`;