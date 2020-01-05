import styled from 'styled-components';
import { pixelToRem } from '../../utils/pixelToRem';

export interface IHamburguerLineContainer {
  isActive: boolean;
}

export const HamburguerLineContainer = styled.div<IHamburguerLineContainer>`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: ${props => props.isActive ? pixelToRem(2.5) : '0'};
  margin-top: ${pixelToRem(3.5)};
  margin-right: ${props => props.isActive ? pixelToRem(.6) : '0'};
  position: absolute;
  transition: .1s;
`