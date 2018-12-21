import React from "react";
import styled from "styled-components";

export const Button = styled('button')`
  background-color: transparent;
  font-family: ${props => props.theme.bodyFont};
  padding: 0.6rem 0.8rem;
  color: ${props => props.theme.text};
  border: 1px solid transparent;
  font-weight: bolder;
  border-radius: ${props => props.theme.radiusBase};
`;

export const ButtonPrimary = styled(Button)`
  background-color: ${props => props.theme.primary};
  color: white;
`;

export const ButtonSecondary = styled(Button)`
  background-color: ${props => props.theme.secondary};
  color: white;
`;

export const ButtonAccent = styled(Button)`
  background-color: ${props => props.theme.accent};
  color: white;
`;

export const ButtonDark = styled(Button)`
  background-color: ${props => props.theme.dark};
  color: white;
`;

export const ButtonLight = styled(Button)`
  background-color: ${props => props.theme.light};
`;

export const ButtonLink = styled(Button)`
  color: ${props => props.theme.link};
`;
