import React from 'react'
import { ContainerTitle, Title } from './Home.styles';
import Sectors from '../Sectors/Sectors';

export default function Home() {
  return (
    <>
      <ContainerTitle>
        <Title>
          Parkman
          <p>A melhor forma de garantir a sua vaga</p>
        </Title>
        <span>Bem vindo Breno!</span>
      </ContainerTitle>
      <Sectors />
    </>
  );
}