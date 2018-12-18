import React from "react";
import styled from "styled-components";

export interface CardProps {
  children?: any;
}

export const CardContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  border: 1px solid ${props => props.theme.gray};
  font-family: ${props => props.theme.bodyFont};
  max-width: 15rem;
`;

export const CardMedia = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
  padding: 1px;
`;

export const CardBody = styled.div`
  padding: 0.5rem;
`;

export const CardTitle = styled.div`
  font-family: ${props => props.theme.headerFont};
  font-weight: bold;
  text-transform: lowercase;
  margin-bottom: 0.5rem;
`;
export const CardContent = styled.p`
  margin: 0;
`;

export const CardActions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

export const Card = (props: CardProps) => {
  return (
    <CardContainer>
      {typeof props.children === "string" ? (
        <CardBody>{props.children}</CardBody>
      ) : (
        props.children
      )}
    </CardContainer>
  );
};
