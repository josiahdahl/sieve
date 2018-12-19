import { createGlobalStyle } from "styled-components";
import styledNormalize from "styled-normalize";

export const GlobalStyles = createGlobalStyle`
  ${styledNormalize};
  *,
  *:after,
  *:before {
    box-sizing: border-box;
  }
 `;
