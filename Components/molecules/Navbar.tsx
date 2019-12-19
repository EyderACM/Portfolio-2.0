import React from 'react';
import { NavbarWrapper } from '../atoms/NavbarWrapper';
import { NavbarImage } from '../atoms/NavbarImage';
// @ts-ignore
import myImage from '../../static/images/eyderImage.png';

export const Navbar = () => {
    return (
        <NavbarWrapper>
            <NavbarImage src={myImage} alt='holi'/>
            <p>😛</p>
        </NavbarWrapper>
    )
}
