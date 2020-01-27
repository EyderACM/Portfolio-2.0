import styled from 'styled-components';
import { pixelToRem } from '../../utils/pixelToRem';

export const SkillBlocksWrapper = styled.div`
  display: flex;
  flex-direction: column;      
  margin: 0 auto;
  width: ${pixelToRem(275)};
`;