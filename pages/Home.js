import React from 'react';
import { HomeContainer, HeroSection, Title, Subtitle, Content, Button } from '../styles/pages/SyleHome';
import Header from '../components/header'

const Home = () => {
  return (
    <>
    <Header/>
    <HomeContainer>
      <HeroSection>
        <Title>Olá, eu sou Rafael Victorio :)</Title>
        <Subtitle>Sou desenvolvedor de software</Subtitle>
      </HeroSection>
      <Content>
        <p>
         Aqui podemos falar sobre mim!
        </p>
        <Button href="#projects">Veja meu projetos</Button>
      </Content>
    </HomeContainer>
    </>
  );
};

export default Home;
