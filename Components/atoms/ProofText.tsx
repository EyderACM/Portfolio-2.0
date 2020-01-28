import styled from 'styled-components';
import { pixelToRem } from '../../utils/pixelToRem';

export const ProofText = styled.h3`
  font-family: Montserrat;			
  font-weight: 300;
  font-size: ${pixelToRem(12)};
  text-align: center;		
  bottom: 10%;	
  position: absolute;
  bottom: 0;
  margin-bottom: ${pixelToRem(20)};
  left: 25%;
  right: 25%;

  @media (max-height: ${pixelToRem(500)}){
    display: none;
  }
`;		