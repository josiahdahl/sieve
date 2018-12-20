import React from 'react';
import { SpotifyAlbum } from '../types/Spotify';
import { Grid, GridCol } from './Grid';
import { ReleaseCard } from '../styles/ReleaseCard';

interface Props {
  releases: SpotifyAlbum[];
}

export const ReleaseList = (props: Props) => {
  const { releases } = props;
  return (
    <Grid>
      {releases.map(release => (
        <GridCol key={release.id}>
          <ReleaseCard release={release} />
        </GridCol>
      ))}
    </Grid>
  );
};
