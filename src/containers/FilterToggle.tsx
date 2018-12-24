import React from "react";
import { ButtonGroup } from "../styles/ButtonGroup";
import {
  NEW_RELEASES_FILTER_ALBUMS,
  NEW_RELEASES_FILTER_SINGLES,
  NewReleasesFilterAlbums,
  NewReleasesFilterNone,
  NewReleasesFilterSingles
} from "../store/new-releases/new-releases.actions";
import { Button, ButtonPrimary } from "../components/Button";
import { RootState } from "../store/reducers";
import { selectNewReleases } from "../store/new-releases/new-releases.selectors";
import { connect } from "react-redux";

interface Props {
  filter: string | undefined;
}

interface State {}

interface Dispatch {
  filterAlbums: () => void;
  filterSingles: () => void;
  filterNone: () => void;
}

export class Component extends React.Component<Props & Dispatch, State> {
  constructor(props) {
    super(props);
    this.handleFilterAlbums = this.handleFilterAlbums.bind(this);
    this.handleFilterSingles = this.handleFilterSingles.bind(this);
  }

  handleFilterAlbums() {
    if (this.albumsFiltered) {
      this.props.filterNone();
    } else {
      this.props.filterAlbums();
    }
  }

  handleFilterSingles() {
    if (this.singlesFiltered) {
      this.props.filterNone();
    } else {
      this.props.filterSingles();
    }
  }

  get albumsFiltered() {
    return this.props.filter === "album";
  }

  get singlesFiltered() {
    return this.props.filter === "single";
  }

  render(): React.ReactNode {
    const AlbumButton = this.albumsFiltered ? ButtonPrimary : Button;
    const SinglesButton = this.singlesFiltered ? ButtonPrimary : Button;
    return (
      <React.Fragment>
        <AlbumButton onClick={this.handleFilterAlbums}>Albums</AlbumButton>
        <SinglesButton onClick={this.handleFilterSingles}>
          Singles
        </SinglesButton>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: RootState): Props => {
  const { filter } = selectNewReleases(state);
  return {
    filter
  };
};

const mapDispatchToProps = (dispatch): Dispatch => ({
  filterAlbums: () => dispatch(new NewReleasesFilterAlbums()),
  filterSingles: () => dispatch(new NewReleasesFilterSingles()),
  filterNone: () => dispatch(new NewReleasesFilterNone())
});

export const FilterToggle = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
