import styled from 'styled-components';
import { pixelToRem } from '../../utils/pixelToRem';
import * as units from '../../utils/units';

export const SplashText = styled.h1`
    font-size: ${pixelToRem(50)};
    font-family: 'Montserrat';    
    font-weight: 500;
    margin-bottom: ${pixelToRem(30)};
    margin-top: ${pixelToRem(20)};
    text-align: center;    

    @media (min-width: ${units.MIN_WIDTH_DESKTOP}){
        font-size: ${pixelToRem(75)};
        margin-bottom: ${pixelToRem(30)};
    }
`;