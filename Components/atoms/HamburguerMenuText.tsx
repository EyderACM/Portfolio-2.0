import styled from 'styled-components';
import { pixelToRem } from '../../utils/pixelToRem';

export const HamburguerMenuText = styled.h1`
  color: white;
  cursor: pointer;
  font-family: 'Montserrat';
  font-size: ${pixelToRem(45)};
  font-weight: bold;  
`;