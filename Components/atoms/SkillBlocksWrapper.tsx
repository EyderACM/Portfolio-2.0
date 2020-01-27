import styled from 'styled-components';
import { pixelToRem } from '../../utils/pixelToRem';
import * as UNITS from '../../utils/units';

export const SkillBlocksWrapper = styled.div`
  display: flex;
  flex-direction: column;      
  margin: 0 auto;
  width: ${pixelToRem(275)};

  @media(min-width: ${UNITS.MAX_WIDTH_DESKTOP}){    
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    width: ${pixelToRem(700)};    
  }
`;