import styled from 'styled-components';
import { pixelToRem } from '../../utils/pixelToRem';

export const SectionTitle = styled.h2`
  font-family: Montserrat;
  font-size: ${pixelToRem(50)};
  font-weight: 500;
  margin-top: ${pixelToRem(25)};
  text-align: center;
`