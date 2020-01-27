import styled from 'styled-components';
import { pixelToRem } from '../../utils/pixelToRem';

export const ListTitle = styled.p`
  font-family: Montserrat;
  font-size: ${pixelToRem(20)};
  font-weight: 600;
  margin-bottom: ${pixelToRem(15)};  
`;