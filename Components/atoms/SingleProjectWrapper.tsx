import styled from 'styled-components';
import { pixelToRem } from '../../utils/pixelToRem';
import * as UNITS from '../../utils/units';

export const SingleProjectWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;    
  margin-bottom: ${pixelToRem(50)};

  @media(min-width: ${UNITS.MIN_WIDTH_DESKTOP}){
    align-items: none;
    flex-direction: row;
    margin: ${pixelToRem(10)} 0 ${pixelToRem(50)} 0;    
  }
`