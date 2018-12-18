import React from 'react';
import { newReleases } from '../store/actions/new-releases';
import { connect } from 'react-redux';
import { ReleaseList } from '../components/ReleaseList';
import { State } from '../store/reducers';
import { Dispatch } from 'redux';

function paginateReleases(releases, currentPage, limit) {
  return releases.slice((currentPage - 1) * limit, currentPage * limit);
}

const mapStateToProps = (state: State) => {
  const { newReleases } = state;
  const { currentPage, limit, releases } = newReleases;
  return {
    currentPage,
    limit,
    releases: paginateReleases(releases, currentPage, limit)
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchReleases: ({ page, limit }) =>
    dispatch(newReleases.request({ page, limit }))
});

export const NewReleases = connect(
  mapStateToProps,
  mapDispatchToProps
)(ReleaseList);
