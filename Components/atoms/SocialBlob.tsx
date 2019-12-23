import styled from 'styled-components';
import { pixelToRem } from '../../utils/pixelToRem';

export const SocialBlob = styled.img`  
  transition: .8s;
  width: ${pixelToRem(70)};
  &:hover {
    width: ${pixelToRem(90)};
  }
`;