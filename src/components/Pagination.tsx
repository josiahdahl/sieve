import React, { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";
import { Button } from "./Button";

type Props = {
  itemCount: number;
  page: number;
  limit: number;
  goToPage: (page: number) => void;
};

type State = {
  page: number;
};

export type PaginationProps = Props & {
  children: (props: Props) => ReactNode;
};

export class PaginationRenderProps extends React.Component<
  PaginationProps,
  State
> {
  constructor(props) {
    super(props);
    const { page } = this.props;
    this.state = {
      page
    };
    this.goToPage.bind(this);
  }

  private goToPage(page: number) {
    this.setState({ page });
  }

  render() {
    const { itemCount, limit } = this.props;
    const { page } = this.state;
    const renderedChildren = this.props.children({
      itemCount,
      page,
      limit,
      goToPage: p => {
        this.goToPage(p);
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

type BaseButtonProps = {
  handleGoToPage: (page: number) => void;
} & React.HTMLProps<HTMLButtonElement>;

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

export const PaginationPrev: FunctionComponent<BaseButtonProps> = ({
  handleGoToPage,
  ...rest
}) => (
  <PaginationButton aria-label="Previous" onClick={handleGoToPage} {...rest}>
    &lt;
  </PaginationButton>
);

export const PaginationNext: FunctionComponent<BaseButtonProps> = ({
  handleGoToPage,
  ...rest
}) => (
  <PaginationButton aria-label="Next" onClick={handleGoToPage} {...rest}>
    &gt;
  </PaginationButton>
);

export const PaginationItem: FunctionComponent<ButtonProps> = ({
  pageNumber,
  handleGoToPage,
  isActive = false,
  ...rest
}) => (
  <PaginationButton
    onClick={handleGoToPage}
    aria-label={`Go to page ${pageNumber}`}
    isActive={isActive}
    {...rest}
  >
    {pageNumber}
  </PaginationButton>
);
