import styled from 'styled-components';
import { pixelToRem } from '../../utils/pixelToRem';

export const OrangeBlobImage = styled.img`
  bottom: ${pixelToRem(-70)};
  position: fixed;
  left: ${pixelToRem(-400)};
  width: ${pixelToRem(400)};    
  z-index: -1;  
`;