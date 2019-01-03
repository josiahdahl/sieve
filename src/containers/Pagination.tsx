import React from "react";
import { NewReleasesState } from "../store/new-releases/new-releases.reducers";
import { selectNewReleases } from "../store/new-releases/new-releases.selectors";
import {
  PaginationContainer,
  PaginationItem,
  PaginationNext,
  PaginationPrev
} from "../components/Pagination";
import { connect } from "react-redux";
import { RootState } from "../store/reducers";
import { Action, Dispatch } from "redux";
import {
  NewReleasesChangePage,
  NewReleasesNextPage,
  NewReleasesPrevPage
} from "../store/new-releases/new-releases.actions";

type State = {};

type StateProps = {
  pageCount: number;
  currentPage: number;
};

type DispatchProps = {
  handleGotoPage: (page: number) => void;
};

type Props = StateProps & DispatchProps;

export class Component extends React.Component<Props, State> {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      pageCount,
      currentPage,
      handleGotoPage,
    } = this.props;

    console.log(currentPage);

    const prevPage = currentPage > 1 ? currentPage - 1 : 1;
    const nextPage = currentPage < pageCount ? currentPage + 1 : currentPage;

    return (
      <PaginationContainer>
        <PaginationPrev
          onClick={() => handleGotoPage(prevPage)}
          disabled={currentPage === 1}
        />
        {pageCount
          ? Array.from(Array(pageCount)).map((_, i) => (
              <PaginationItem
                key={i}
                isActive={i + 1 === currentPage}
                onClick={() => handleGotoPage(i + 1)}
              >
                {i + 1}
              </PaginationItem>
            ))
          : "No Releases"}
        <PaginationNext
          onClick={() => handleGotoPage(nextPage)}
          disabled={nextPage !== currentPage}
        />
      </PaginationContainer>
    );
  }
}

const mapStateToProps = (state: RootState): StateProps => {
  const newReleases: NewReleasesState = selectNewReleases(state);
  const { releasesCount, offset, limit } = newReleases;
  const pageCount = Math.ceil(releasesCount / limit);
  const currentPage = Math.ceil(offset / limit) + 1;
  return {
    pageCount,
    currentPage
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch<Action<any>>
): DispatchProps => ({
  handleGotoPage: page => {
    dispatch(new NewReleasesChangePage({ page }));
  }
});

export const Pagination = connect<StateProps, DispatchProps, {}, RootState>(
  mapStateToProps,
  mapDispatchToProps
)(Component);
