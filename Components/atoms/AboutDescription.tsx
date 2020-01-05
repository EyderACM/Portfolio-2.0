import styled from 'styled-components';
import { pixelToRem } from '../../utils/pixelToRem';

export const AboutDescription = styled.h2`
  font-family: Montserrat;
  font-size: ${pixelToRem(20)};
  font-weight: 300;
  line-height: ${pixelToRem(30)};
  margin-bottom: ${pixelToRem(20)};
`;