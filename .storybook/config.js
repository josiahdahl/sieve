import React from "react";
import { configure, addDecorator } from "@storybook/react";
import { theme } from "../src/styles/theme";
import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";

const req = require.context("../src/stories", true, /.stories.tsx/);

function loadStories() {
  req.keys().forEach(req);
}

addDecorator(story => (
  <React.Fragment>
    <Normalize />
    <ThemeProvider theme={theme}>{story()}</ThemeProvider>
  </React.Fragment>
));

configure(loadStories, module);
