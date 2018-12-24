import React from "react";
import { storiesOf } from "@storybook/react";
import {
  Button,
  ButtonAccent,
  ButtonDark,
  ButtonLight,
  ButtonLink,
  ButtonPrimary,
  ButtonSecondary
} from "../components/Button";
import { Grid, GridItem, PaddingDecorator } from "./common";
import { GridRow } from '../components/Grid';
import { ButtonGroup } from '../styles/ButtonGroup';

const buttonTypes = [
  { component: Button, title: "Button" },
  { component: ButtonPrimary, title: "ButtonPrimary" },
  { component: ButtonSecondary, title: "ButtonSecondary" },
  { component: ButtonAccent, title: "ButtonAccent" },
  { component: ButtonDark, title: "ButtonDark" },
  { component: ButtonLight, title: "ButtonLight" },
  { component: ButtonLink, title: "ButtonLink" }
];

storiesOf("Buttons", module)
  .addDecorator(PaddingDecorator)
  .add("Solid Buttons", () => (
    <Grid>
      {buttonTypes.map(({ component: Component, title }) => (
        <GridItem key={title}>
          <Component>{title}</Component>
        </GridItem>
      ))}
    </Grid>
  ))
  .add('Button Groups', () => (
    <Grid>
      <GridRow>
        <ButtonGroup>
          <ButtonPrimary>First in Group</ButtonPrimary>
          <ButtonPrimary>Some Middle Stuff</ButtonPrimary>
          <ButtonPrimary>Last in Group</ButtonPrimary>
        </ButtonGroup>
      </GridRow>
    </Grid>
  ));
