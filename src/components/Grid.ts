import styled from 'styled-components';

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

export const GridRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  flex-shrink: 0;
  width: 100%;
  flex-wrap: wrap;
`;

interface GridColProps {
  flex?: 1 | 0;
  flexShrink?: 1 | 0;
  flexGrow?: 1 | 0;
}

export const GridCol = styled('div')<GridColProps>`
  padding: 0.5rem;
`;
