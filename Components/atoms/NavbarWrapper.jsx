import styled from 'styled-components';
import { pixelToRem } from '../../utils/pixelToRem';

export const NavbarWrapper = styled.div`
    display: flex;
    flex-direction: row;    
    justify-content: space-around;
    padding: ${pixelToRem(25)} ${pixelToRem(20)};
`;