import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 2px solid ${props => props.theme.primary};
`;

const Logo = styled.div`
  font-family: ${props => props.theme.headerFont};
  font-size: 1.5rem;
  padding: 0.2rem 0.5rem;
`;

export const Header = () => (
  <Container>
    <Logo>sieve</Logo>
  </Container>
);
