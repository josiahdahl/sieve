import React from "react";
import styled from "styled-components";

const Padding = styled.div`
  padding: 1rem;
`;

export const Grid = styled.div`
  display: flex;
  flex-direction: row;
  max-width: ${props => props.maxWidth};
  flex-wrap: wrap;
`;

export const GridItem = styled.div`
  box-sizing: border-box;
  padding: 0.5rem;
  width: 50%;
`;

export const PaddingDecorator = story => <Padding>{story()}</Padding>;
