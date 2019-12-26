import React, { useState } from 'react'
import { HamburguerBlob } from '../atoms/HamburguerBlob';
// @ts-ignore
import blobImage from '../../static/images/hamburguerBlob.svg';
import { HamburguerLine, eposition } from '../atoms/HamburguerLine';
import { HamburguerWrapper } from '../atoms/HamburguerWrapper';
import { HamburguerLineContainer } from '../atoms/HamburguerLineContainer';

export const Hamburguer = () =>{
  const [active, setActive] = useState<boolean>(false);

  const onHamburguerClick = () => () => {
    console.log('hamburguer clicked');
    setActive(!active);
  }

  return (
    <HamburguerWrapper onClick={onHamburguerClick()}>
      <HamburguerLineContainer>
        <HamburguerLine isActive={active} position={eposition.TOP}/>
        <HamburguerLine isActive={active} position={eposition.MIDDLE}/>
        <HamburguerLine isActive={active} position={eposition.BOTTOM}/>
      </HamburguerLineContainer>      
      <HamburguerBlob src={blobImage} />
    </HamburguerWrapper>
  )
}
