import React, { useState } from 'react';
import { NavbarWrapper } from '../atoms/NavbarWrapper';
import { NavbarImage } from '../atoms/NavbarImage';
import { Hamburguer } from './Hamburguer';
import { HamburguerMenu } from './HamburguerMenu';

export const Navbar = () => {

	const [state, setState] = useState<any>({
		initial: false,
		isActive: false,
		menuName: "Menu"
	});

  const onHamburguerClick = () => () => {
    if(state.initial === false){
			setState({	
				initial: null,			
				isActive: true,
				menuName: "Close",
			});
		}else if(state.isActive){
			setState({				
				isActive: !state.isActive,
				menuName: "MenuName"
			});
		}else if(!state.isActive) {
			setState({
				isActive: !state.isActive,
				menuName: "Close"
			})
		}
  }

	return (
		<header>
			<NavbarWrapper>
				<NavbarImage src="/static/images/eyderImage.png" alt='holi'/>
				<Hamburguer active={state.isActive} onHamburguerClick={onHamburguerClick}/>
			</NavbarWrapper>
			<HamburguerMenu state={{...state}}/>
		</header>
	)
}
