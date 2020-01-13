import styled from 'styled-components';
import { pixelToRem } from '../../utils/pixelToRem';

export const ProjectTitle = styled.h4`
  font-family: Montserrat;
  font-size: ${pixelToRem(25)};
  font-weight: 700;
  margin-bottom: ${pixelToRem(10)};
  margin-top: ${pixelToRem(15)};
`;