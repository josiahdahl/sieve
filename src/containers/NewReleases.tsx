import React from "react";
import { connect } from "react-redux";
import { ReleaseList } from "../components/ReleaseList";
import { State } from "../store/reducers";
import { selectReleasesForPage } from "../store/reducers/new-releases";
import { newReleases } from "../store/actions/new-releases";

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

const mapStateToProps = (state: State) => ({
  releases: selectReleasesForPage(state)
});

const mapDispatchToProps = dispatch => ({
  fetchReleases: ({ page, limit } = { page: 1, limit: null }) =>
    dispatch(newReleases.request({ page, limit }))
});
export const NewReleases = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
