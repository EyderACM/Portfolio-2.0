import styled from 'styled-components';
import { pixelToRem } from '../../utils/pixelToRem';

export const NavbarWrapper = styled.div`
    align-items: center;
    display: flex;
    flex-direction: row;    
    flex-grow: 1;
    justify-content: space-between;
    padding: ${pixelToRem(20)} ${pixelToRem(20)};
`;