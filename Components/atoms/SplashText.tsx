import styled from 'styled-components';
import { pixelToRem } from '../../utils/pixelToRem';
import * as units from '../../utils/units';

export const SplashText = styled.h1`
    font-size: ${pixelToRem(50)};
    font-family: 'Montserrat';    
    font-weight: 500;
    margin: 0;
    text-align: center;

    @media (min-width: ${units.MIN_WIDTH_DESKTOP}){
        font-size: ${pixelToRem(75)};
    }
`;