import React, { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";
import { Button } from "./Button";

type Props = {
  pageCount: number;
  currentPage: number;
  handleNavigate: (page: number) => void;
};

type State = {
  currentPage: number;
};

type ChildProps = {
  prevPage: number;
  nextPage: number;
  currentPage: number;
  pageCount: number;
  handleNavigate: (page: number) => void;
};

export type PaginationProps = Props & {
  children: (props: ChildProps) => ReactNode;
};

export class PaginationRenderProps extends React.Component<
  PaginationProps,
  State
> {
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

  render() {
    const { pageCount } = this.props;
    const { currentPage } = this.state;
    const prevPage = currentPage - 1 || 1;
    const nextPage =
      currentPage + 1 > pageCount ? currentPage : currentPage + 1;
    const renderedChildren = this.props.children({
      prevPage,
      nextPage,
      currentPage,
      pageCount,
      handleNavigate: pageNum => {
        this.handleNavigate(pageNum);
      }
    });
    return renderedChildren && React.Children.only(renderedChildren);
  }
}

export const PaginationContainer = styled.div`
  border-radius: ${props => props.theme.radiusBase};
  border: 1px solid ${props => props.theme.secondary};
  display: inline-flex;
  flex-direction: row;
  justify-content: space-between;
`;

type BaseButtonProps = React.HTMLProps<HTMLButtonElement>;

type ButtonProps = BaseButtonProps & {
  pageNumber: number;
  isActive?: boolean;
};

const PaginationButton = styled(Button)`
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  background-color: ${props =>
    props.isActive ? props.theme.primary : "inherit"};
  color: ${props => (props.isActive ? "#fff" : "inherit")};
  border-radius: 0;
`;

export const PaginationPrev: FunctionComponent<BaseButtonProps> = (props) => (
  <PaginationButton aria-label="Previous" {...props}>
    &lt;
  </PaginationButton>
);

export const PaginationNext: FunctionComponent<BaseButtonProps> = (props) => (
  <PaginationButton aria-label="Next" {...props}>
    &gt;
  </PaginationButton>
);

export const PaginationItem: FunctionComponent<ButtonProps> = ({
  pageNumber,
  isActive = false,
  ...rest
}) => (
  <PaginationButton
    aria-label={`Go to page ${pageNumber}`}
    isActive={isActive}
    {...rest}
  >
    {pageNumber}
  </PaginationButton>
);
