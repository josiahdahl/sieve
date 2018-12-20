import React from 'react';
import { storiesOf } from '@storybook/react';
import { PaddingDecorator } from './common';
import {
  PaginationContainer,
  PaginationItem,
  PaginationNext,
  PaginationPrev,
  PaginationRenderProps
} from '../components/Pagination';

storiesOf("Pagination", module)
  .addDecorator(PaddingDecorator)
  .add("Standard", () => (
    <PaginationContainer>
      <PaginationPrev
        handleGoToPage={() => {
          alert("Went back");
        }}
      />
      {[1, 2, 3, 4, 5].map(page => (
        <PaginationItem
          isActive={2 === page}
          pageNumber={page}
          handleGoToPage={() => {
            alert(`Went to ${page}`);
          }}
        />
      ))}
      <PaginationNext
        handleGoToPage={() => {
          alert("Went forward");
        }}
      />
    </PaginationContainer>
  ))
  .add("With Render Props", () => {
    let state = {
      itemCount: 10,
      page: 1,
      limit: 2
    };

    const handleGoToPage = page => {
      state = {
        ...state,
        page
      };
    };

    const props = {
      ...state,
      goToPage: handleGoToPage
    };
    return (
      <PaginationRenderProps {...props}>
        {({ itemCount, page, limit, goToPage }) => {
          const totalPages = Math.ceil(itemCount / limit);
          const prevPage = page - 1 || 1;
          const nextPage = page + 1 > totalPages ? page : page + 1;
          return (
            <PaginationContainer>
              <PaginationPrev
                handleGoToPage={() => goToPage(prevPage)}
                disabled={page - 1 === 0}
              />
              {Array.from(Array(totalPages)).map((_, i) => (
                <PaginationItem
                  key={i}
                  isActive={i + 1 === page}
                  pageNumber={i + 1}
                  handleGoToPage={() => goToPage(i + 1)}
                />
              ))}
              <PaginationNext
                handleGoToPage={() => goToPage(nextPage)}
                disabled={nextPage === page}
              />
            </PaginationContainer>
          );
        }}
      </PaginationRenderProps>
    );
  });
