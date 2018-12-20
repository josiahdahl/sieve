import React, { FunctionComponent } from "react";
import { SpotifyAlbum } from "../types/Spotify";
import {
  Card,
  CardActions,
  CardBody,
  CardContent,
  CardMedia,
  CardTitle
} from "../components/Card";
import { ButtonLink } from "../components/Button";
import styled, { css } from "styled-components";

const overflowStyle = css`
  position: relative;
  line-height: 1.15;
  max-height: 1.15em;
  word-break: break-all;
  overflow: hidden;
  &:after {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 3rem;
    background: linear-gradient(to right, transparent 0%, #fff 100%);
    content: "";
  }
`;

const Title = styled(CardTitle)`
  ${overflowStyle};
  margin-bottom: 0.5rem;
`;

const Artist = styled(CardContent)`
  ${overflowStyle};
  color: ${props => props.theme.gray};
`;

type Props = {
  release: SpotifyAlbum;
};

export const ReleaseCard: FunctionComponent<Props> = ({ release }) => (
  <Card>
    <CardMedia src={release.images[1].url} />
    <CardBody>
      <Title>{release.name}</Title>
      <Artist>{release.artists[0].name}</Artist>
    </CardBody>
    <CardActions>
      <ButtonLink>Listen</ButtonLink>
    </CardActions>
  </Card>
);
