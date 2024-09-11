import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: rgb(66, 66, 66);
  padding: 2rem;
`;

export const HeroSection = styled.section`
  text-align: center;
  margin-bottom: 2rem;
`;

export const Title = styled.h1`
  font-size: 3rem;
  color: rgb(245, 245, 245);
  margin-bottom: 1rem;
`;

export const Subtitle = styled.h2`
  font-size: 1.5rem;
  color: rgb(245, 245, 245);
`;

export const Content = styled.div`
  max-width: 800px;
  width: 100%;
  background: rgb(245, 245, 245);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Button = styled.a`
  display: inline-block;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: #fff;
  background: #007bff;
  border-radius: 4px;
  text-decoration: none;
  text-align: center;

  &:hover {
    background: #0056b3;
  }
`;
