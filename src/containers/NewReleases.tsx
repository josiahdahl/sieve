import React from "react";
import { connect } from "react-redux";
import { ReleaseList } from "../components/ReleaseList";
import { RootState } from "../store/reducers";
import { selectReleasesForPage } from "../store/new-releases/new-releases.selectors";
import { NewReleasesRequest } from "../store/new-releases/new-releases.actions";
import { SpotifyAlbum } from '../types/Spotify';

interface Props {
  releases: SpotifyAlbum[];
  fetchReleases: Function;
}

class Component extends React.Component<Props, {}> {
  componentDidMount(): void {
    this.props.fetchReleases();
  }

  render(): React.ReactNode {
    const { props } = this;
    const { releases } = props;
    return <ReleaseList releases={releases} />;
  }
}

const mapStateToProps = (state: RootState) => ({
  releases: selectReleasesForPage(state)
});

const mapDispatchToProps = dispatch => ({
  fetchReleases: () => {
    dispatch(new NewReleasesRequest());
  }
});
export const NewReleases = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
