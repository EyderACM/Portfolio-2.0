import styled from 'styled-components';
import { pixelToRem } from '../../utils/pixelToRem';

export const OrangeBlobImage = styled.img`
  bottom: ${pixelToRem(-90)};
  position: fixed;
  left: ${pixelToRem(-200)};
  width: ${pixelToRem(400)};    
  z-index: -1;  
`;