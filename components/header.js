import React from 'react';
import { HeaderContainer, Nav, NavLink } from '../styles/components/header';

const Header = () => {
  return (
    <HeaderContainer>
      <Nav>
        <NavLink href="#home">Home</NavLink>
        <NavLink href="#about">Sobre mim</NavLink>
        <NavLink href="#projects">Projetos</NavLink>
        <NavLink href="#contact">Contatos</NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;


