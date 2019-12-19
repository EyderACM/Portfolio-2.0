import styled from 'styled-components';
import { pixelToRem } from '../../utils/pixelToRem';

export const DescriptionText = styled.p`
  font-family: Montserrat;
  font-size: ${pixelToRem(20)};
  margin-top: ${pixelToRem(10)};
`;