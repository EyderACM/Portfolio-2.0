import React from 'react'
import { HamburguerBlob } from '../atoms/HamburguerBlob';
// @ts-ignore
import blobImage from '../../static/images/hamburguerBlob.svg';
import { HamburguerLine } from '../atoms/HamburguerLine';
import { HamburguerWrapper } from '../atoms/HamburguerWrapper';

export const Hamburguer = () =>{
  return (
    <HamburguerWrapper>
      <HamburguerLine />
      <HamburguerLine />
      <HamburguerLine />
      <HamburguerBlob src={blobImage} />
    </HamburguerWrapper>
  )
}
