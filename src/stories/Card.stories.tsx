import React from "react";
import { storiesOf } from "@storybook/react";
import {
  Card,
  CardBody,
  CardContent,
  CardMedia,
  CardTitle
} from "../components/Card";

storiesOf("Card", module)
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
    <Card title="Some title" imgSrc="https://placeimg.com/400/400/tech?1241" />
  ));
