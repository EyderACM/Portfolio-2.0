import styled from 'styled-components';
import { pixelToRem } from '../../utils/pixelToRem';
import * as UNITS from '../../utils/units';

export const ProjectImage = styled.img`
  width: 100%;
 

  @media(min-width: ${UNITS.MIN_TABLET_WIDTH}){
    width: 100%;
  }

  @media(min-width: ${UNITS.MIN_WIDTH_DESKTOP}){
    width: ${pixelToRem(450)};
  }
`;