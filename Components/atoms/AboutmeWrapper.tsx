import styled from 'styled-components';
import { pixelToRem } from '../../utils/pixelToRem';
import * as UNITS from '../../utils/units';

export const AboutmeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  margin: 0 ${pixelToRem(15)} ${pixelToRem(30)} ${pixelToRem(15)};

  @media(min-width: ${UNITS.MIN_TABLET_WIDTH}){
    margin: 0 ${pixelToRem(100)} ${pixelToRem(30)} ${pixelToRem(100)};    
  }

  @media(min-width: ${UNITS.MIN_WIDTH_DESKTOP}){
    margin: 0 ${pixelToRem(250)} ${pixelToRem(30)} ${pixelToRem(250)};    
  }
`;