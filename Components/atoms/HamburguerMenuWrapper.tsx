import styled from 'styled-components';
import { pixelToRem } from '../../utils/pixelToRem';

export const HamburguerMenuWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${pixelToRem(100)} ${pixelToRem(40)}
`;