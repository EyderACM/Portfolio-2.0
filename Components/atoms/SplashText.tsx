import styled from 'styled-components';
import { pixelToRem } from '../../utils/pixelToRem';

export const SplashText = styled.h1`
    font-size: ${pixelToRem(50)};
    font-family: 'Montserrat';
    font-weight: 500;
    text-align: center;
`;