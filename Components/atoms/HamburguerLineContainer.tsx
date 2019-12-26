import styled from 'styled-components';
import { pixelToRem } from '../../utils/pixelToRem';

export const HamburguerLineContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: ${pixelToRem(3.5)};
  position: fixed;
`