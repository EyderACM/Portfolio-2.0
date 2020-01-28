import styled from 'styled-components';
import { pixelToRem } from '../../utils/pixelToRem';
import * as UNITS from '../../utils/units';

export const HamburguerMenuWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${pixelToRem(100)} ${pixelToRem(40)};

  @media (min-width: ${UNITS.MIN_WIDTH_DESKTOP}){
    align-items: flex-end;
    padding-right: ${pixelToRem(300)};
  }
`;