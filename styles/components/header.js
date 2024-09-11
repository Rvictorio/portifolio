import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 4.5rem;
  width: 30%;
  border: 1px solid rgba(255, 255, 255, 0.4);
  background: rgb(245, 245, 245);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.03);
  backdrop-filter: blur(0.2rem);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  border-radius: 60px;
  z-index: 1000;
  margin-top: 20px;


  @media (max-width: 640px) {
    height: 3.25rem;
    width: 48rem;
    border-radius: 9999px;
  }
`;

export const Logo = styled.div`
  height: 28px;
  width: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 1rem;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: rgb(66, 66, 66);

  @media (max-width: 640px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  color: #333;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    color: #555;
  }
`;
