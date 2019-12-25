import React from 'react';
import { NavbarWrapper } from '../atoms/NavbarWrapper';
import { NavbarImage } from '../atoms/NavbarImage';
import { Hamburguer } from './Hamburguer';
export const Navbar = () => {
	return (
		<NavbarWrapper>
			<NavbarImage src="/static/images/eyderImage.png" alt='holi'/>
			<Hamburguer />
		</NavbarWrapper>
	)
}
