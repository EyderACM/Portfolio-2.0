import styled from 'styled-components';
import { pixelToRem } from '../../utils/pixelToRem';
import * as UNITS from '../../utils/units';

export const ProjectDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media(min-width: ${UNITS.MIN_WIDTH_DESKTOP}){
    margin: 0 0 0 ${pixelToRem(50)};    
  }
`;