import styled from 'styled-components';
import { pixelToRem } from '../../utils/pixelToRem';

export const ProjectDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 0 ${pixelToRem(50)};
`;