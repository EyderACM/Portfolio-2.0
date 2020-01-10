import styled from 'styled-components';
import { pixelToRem } from '../../utils/pixelToRem';
import * as UNITS from '../../utils/units';

export const ProjectDescription = styled.p`
  font-family: Montserrat;
  font-size: ${pixelToRem(14)};
  font-weight: 300;  
  line-height: ${pixelToRem(24)};
  margin-top: 0;
  width: 100%;

  @media(min-width: ${UNITS.MIN_TABLET_WIDTH}){
    width: 100%;
  }

  @media(min-width: ${UNITS.MAX_WIDTH_DESKTOP}){
    font-size: ${pixelToRem(18)};
    line-height: ${pixelToRem(28)};
    width: ${pixelToRem(350)};
  }
`;