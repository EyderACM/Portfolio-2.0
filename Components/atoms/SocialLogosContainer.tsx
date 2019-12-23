import styled from 'styled-components';
import { pixelToRem } from '../../utils/pixelToRem';
import * as units from '../../utils/units';

export const SociallogosContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;  
  height: ${pixelToRem(90)};
  justify-content: space-around;
  margin-top: ${pixelToRem(10)};  

  @media(min-width: ${units.MAX_WIDTH_DESKTOP}){
    margin-top: ${pixelToRem(30)};
    width: ${pixelToRem(250)};
  }
`;