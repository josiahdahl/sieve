import React from 'react';
import { storiesOf } from '@storybook/react';
import { PaddingDecorator } from './common';
import {
  PaginationContainer,
  PaginationItem,
  PaginationNext,
  PaginationPrev,
} from '../components/Pagination';

/*storiesOf("Pagination", module)
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
  ))*/
  /*.add("With Render Props", () => {
    let state = {
      pageCount: 5,
      offset: 1,
    };

    const props = {
      ...state,
      handleNavigate: (_) => {/!* do nothing *!/}
    };
    return (
      <PaginationProvider {...props}>
        {({ prevPage, nextPage, offset, pageCount, handleNavigate }) => {

          return (
            <PaginationContainer>
              <PaginationPrev
                onClick={() => handleNavigate(prevPage)}
                disabled={offset - 1 === 0}
              />
              {Array.from(Array(pageCount)).map((_, i) => (
                <PaginationItem
                  key={i}
                  isActive={i + 1 === offset}
                  pageNumber={i + 1}
                  onClick={() => handleNavigate(i + 1)}
                />
              ))}
              <PaginationNext
                onClick={() => handleNavigate(nextPage)}
                disabled={nextPage === offset}
              />
            </PaginationContainer>
          );
        }}
      </PaginationProvider>
    );
  });*/
