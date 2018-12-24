import React from "react";
import {
  NewReleasesState,
  selectNewReleases
} from "../store/reducers/new-releases";
import {
  PaginationContainer,
  PaginationItem,
  PaginationNext,
  PaginationPrev
} from "../components/Pagination";
import { connect } from "react-redux";
import { RootState as RootState } from "../store/reducers";
import { Action, Dispatch } from 'redux';
import { NewReleasesRequest } from '../store/actions/new-releases';

type State = {
  currentPage: number;
};

type StateProps = {
  pageCount: number;
  currentPage: number;
};

type DispatchProps = {
  handleNavigate: (page: number) => void;
};

type Props = StateProps & DispatchProps;

class Component extends React.Component<Props, State> {
  state: State;
  constructor(props) {
    super(props);
    const { currentPage } = this.props;
    this.state = {
      currentPage
    };
    this.handleNavigate.bind(this);
  }

  private handleNavigate(page: number) {
    this.setState({ currentPage: page });
    this.props.handleNavigate(page);
  }

  componentWillReceiveProps(nextProps: StateProps, nextContext: any): void {
    if (nextProps.currentPage !== this.state.currentPage) {
      this.setState(state => ({
        ...state,
        currentPage: nextProps.currentPage
      }));
    }
  }

  render() {
    const { pageCount } = this.props;
    const { currentPage } = this.state;
    const prevPage = currentPage - 1 || 1;
    const nextPage =
      currentPage + 1 > pageCount ? currentPage : currentPage + 1;

    return (
      <PaginationContainer>
        <PaginationPrev
          onClick={() => this.handleNavigate(prevPage)}
          disabled={currentPage - 1 === 0}
        />
        {pageCount
          ? Array.from(Array(pageCount)).map((_, i) => (
              <PaginationItem
                key={i}
                isActive={i + 1 === currentPage}
                onClick={() => this.handleNavigate(i + 1)}
              >
                {i + 1}
              </PaginationItem>
            ))
          : "No Releases"}
        <PaginationNext
          onClick={() => this.handleNavigate(nextPage)}
          disabled={nextPage === currentPage}
        />
      </PaginationContainer>
    );
  }
}

const mapStateToProps = (state: RootState): StateProps => {
  const newReleases: NewReleasesState = selectNewReleases(state);
  const { releasesCount, currentPage, limit } = newReleases;
  const pageCount = Math.ceil(releasesCount / limit);
  return {
    currentPage,
    pageCount
  };
};

const mapDispatchToProps = (dispatch: Dispatch<Action<any>>): DispatchProps => ({
  handleNavigate: page => {
      dispatch(new NewReleasesRequest(page))
  }
});

export const Pagination = connect<StateProps, DispatchProps, {}, RootState>(
  mapStateToProps,
  mapDispatchToProps
)(Component);
