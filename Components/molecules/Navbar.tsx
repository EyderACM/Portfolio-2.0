import React, { useState, useEffect } from 'react';
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
	const [disabled, setDisabled] = useState(false);

	useEffect(() => {
		disableHamburguer()	
	}, []);

  const onHamburguerClick = () => () => {
		disableHamburguer();
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
	
	const disableHamburguer = () => {
		setDisabled(true);
		setTimeout(() => {
			setDisabled(false);
		}, 2275);
	}

	return (
		<header>
			<NavbarWrapper>
				<NavbarImage src="/static/images/eyderImage.png"/>
				<Hamburguer active={state.isActive} onHamburguerClick={onHamburguerClick} disabled={disabled}/>
			</NavbarWrapper>
			<HamburguerMenu state={{...state, setState}}/>
		</header>
	)
}
