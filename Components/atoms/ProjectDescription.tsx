import styled from 'styled-components';
import { pixelToRem } from '../../utils/pixelToRem';

export const ProjectDescription = styled.p`
  font-family: Montserrat;
  font-size: ${pixelToRem(18)};
  font-weight: 300;  
  line-height: ${pixelToRem(26)};
  margin-top: 0;
  width: ${pixelToRem(400)};
`;