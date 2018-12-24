import React from "react";
import { connect } from "react-redux";
import { ReleaseList } from "../components/ReleaseList";
import { RootState } from "../store/reducers";
import { selectReleasesForPage } from "../store/reducers/new-releases";
import { NewReleasesRequest } from '../store/actions/new-releases';

interface Props {
  releases: any[];
  fetchReleases: Function;
}

class Component extends React.Component<Props, {}> {
  componentWillMount(): void {
    this.props.fetchReleases({});
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
  fetchReleases: ({ page } = { page: 1 }) =>
    dispatch(new NewReleasesRequest(page))
});
export const NewReleases = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
