import React, { useState } from 'react';
import { NavbarWrapper } from '../atoms/NavbarWrapper';
import { NavbarImage } from '../atoms/NavbarImage';
import { Hamburguer } from './Hamburguer';
export const Navbar = () => {

	const [active, setActive] = useState<boolean>(false);

  const onHamburguerClick = () => () => {
    setActive(!active);
  }

	return (
		<header>
			<NavbarWrapper>
				<NavbarImage src="/static/images/eyderImage.png" alt='holi'/>
				<Hamburguer active={active} onHamburguerClick={onHamburguerClick}/>
			</NavbarWrapper>
		</header>
	)
}
