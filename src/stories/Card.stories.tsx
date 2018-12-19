import React from "react";
import { storiesOf } from "@storybook/react";
import {
  Card,
  CardActions,
  CardBody,
  CardContent,
  CardMedia,
  CardTitle
} from "../components/Card";
import { ButtonLink } from "../components/Button";
import { PaddingDecorator } from "./common";

storiesOf("Card", module)
  .addDecorator(PaddingDecorator)
  .add("Base", () => (
    <div>
      <Card>This is a plain card</Card>
      <br />
      <br />
      <Card>
        <CardBody>
          <CardTitle>My Great Title</CardTitle>
          <CardContent>Card with a title</CardContent>
        </CardBody>
      </Card>
    </div>
  ))
  .add("With Image", () => (
    <Card>
      <CardMedia src="https://placeimg.com/400/400/tech?1542" title="" />
      <CardBody>
        <CardTitle>Some Tech Image</CardTitle>
        Lorem Ipsum Tho
      </CardBody>
    </Card>
  ))
  .add("Action Buttons", () => (
    <Card>
      <CardMedia src="https://placeimg.com/400/400/tech?5232" title="" />
      <CardBody>
        <CardTitle>With Action Buttons</CardTitle>
        Lorem ipsum Tho
      </CardBody>
      <CardActions>
        <ButtonLink>Get it now</ButtonLink>
      </CardActions>
    </Card>
  ));
