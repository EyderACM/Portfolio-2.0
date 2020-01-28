import React from 'react'
import { HamburguerBlob } from '../atoms/HamburguerBlob';
// @ts-ignore
import blobImage from '../../static/images/hamburguerBlob.svg';
import { HamburguerLine, eposition } from '../atoms/HamburguerLine';
import { HamburguerWrapper } from '../atoms/HamburguerWrapper';
import { HamburguerLineContainer } from '../atoms/HamburguerLineContainer';

interface IHamburguer {
  active: boolean;
  disabled: boolean;
  onHamburguerClick: () => any;
}

export const Hamburguer = ({ active, onHamburguerClick, disabled }: IHamburguer) =>{
  return (
    <HamburguerWrapper disabled={disabled} onClick={onHamburguerClick()}>
      <HamburguerLineContainer isActive={active}>
        <HamburguerLine isActive={active} position={eposition.TOP}/>
        <HamburguerLine isActive={active} position={eposition.MIDDLE}/>
        <HamburguerLine isActive={active} position={eposition.BOTTOM}/>
      </HamburguerLineContainer>      
      <HamburguerBlob src={blobImage} />
    </HamburguerWrapper>
  )
}
