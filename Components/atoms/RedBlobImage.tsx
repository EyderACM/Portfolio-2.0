import styled from 'styled-components';
import { pixelToRem } from '../../utils/pixelToRem';

export const RedBlobImage = styled.img`  
  bottom: ${pixelToRem(-70)};
  position: fixed;
  right: ${pixelToRem(-230)};
  width: ${pixelToRem(400)};    
  z-index: -1;  
`;