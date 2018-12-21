import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';

export const PaginationContainer = styled.div`
  flex-direction: row;
  justify-content: space-between;
`;

const PaginationButton = styled(Button)`
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  border-radius: 0;
`;

export const PaginationItem = styled(PaginationButton)<{
  isActive: boolean;
}>`
  background-color: ${props =>
    props.isActive ? props.theme.primary : "inherit"};
  color: ${props => (props.isActive ? "#fff" : "inherit")};
`;

export const PaginationPrev = props => (
  <PaginationButton aria-label="Previous" {...props}>
    &lt;
  </PaginationButton>
);

export const PaginationNext = props => (
  <PaginationButton aria-label="Next" {...props}>
    &gt;
  </PaginationButton>
);
