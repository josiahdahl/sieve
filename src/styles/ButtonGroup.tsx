import styled from "styled-components";
import { Button } from "../components/Button";

export const ButtonGroup = styled.div`
  border-radius: ${props => props.theme.radiusBase};
  ${Button}:not(:first-child):not(:last-child) {
    border-radius: 0;

  }
  ${Button}:first-child {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  ${Button}:last-child {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`;
