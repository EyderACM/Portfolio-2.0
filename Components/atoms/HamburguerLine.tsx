import styled from 'styled-components';
import { pixelToRem } from '../../utils/pixelToRem';

export const HamburguerLine = styled.div`
  background: white;
  border-radius: ${pixelToRem(12)};
  height: ${pixelToRem(4)};
  position: absolute;
  transition: all cubic-bezier(0.26, 0.1, 0.27, 1.55);
  width: ${pixelToRem(24)};
`;