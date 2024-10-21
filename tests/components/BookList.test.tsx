/* eslint no-use-before-define: 0 */  // --> OFF
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import BookList from '../../src/components/BookList';
import { Book } from '../../src/interfaces/interface';


import '@testing-library/jest-dom/vitest'


// Mocked dependencies
vi.mock('./Pagination', () => ({
  default: () => <div>Mocked Pagination</div>,
}));

vi.mock('./EmptyBook', () => ({
  default: () => <div>Mocked EmptyBook</div>,
}));

describe('BookList component', () => {
  const books: Book[] = [
    {
      id: '1',
      volumeInfo: {
        title: 'BookA',
        authors: ['Author 1'],
        publishedDate: '2023',
        imageLinks: { thumbnail: 'url_to_thumbnail' },
      },
    },
    {
      id: '2',
      volumeInfo: {
        title: 'BookB',
        authors: ['Author 2'],
        publishedDate: '2022',
        imageLinks: { thumbnail: 'url_to_thumbnail' },
      },
    },
  ];

  const setLoading = vi.fn();
  const setError = vi.fn();
  const setSelectedBook = vi.fn();
  const toggleModal = vi.fn();

  it('renders loading message when loading is true', () => {
    render(
      <BookList
        books={[]}
        loading={true}
        error={null}
        setLoading={setLoading}
        setError={setError}
        setSelectedBook={setSelectedBook}
        toggleModal={toggleModal}
        searchedTerm="test"
      />
    );
    // const loading = screen.getByText(/Searching for books.../i);
    // expect(loading).toBeInTheDocument()
    const heading = screen.getByText(/Searching for books.../i);
    expect(heading).toBeInTheDocument()
});

  it('renders error message when error is provided', () => {
    render(
      <BookList
        books={[]}
        loading={false}
        error="Error fetching books"
        setLoading={setLoading}
        setError={setError}
        setSelectedBook={setSelectedBook}
        toggleModal={toggleModal}
        searchedTerm="test"
      />
    );
    expect(screen.getByText(/Error fetching books/i)).toBeInTheDocument();
  });
  it('renders books when books are available and triggers setSelectedBook and toggleModal', () => {
    render(
      <BookList
        books={books}
        loading={false}
        error={null}
        setLoading={setLoading}
        setError={setError}
        setSelectedBook={setSelectedBook}
        toggleModal={toggleModal}
        searchedTerm="test"
      />
    );
    
    expect(screen.getByText('BookB')).toBeInTheDocument();
    
    const bookItem = screen.getByText('BookA');
    fireEvent.click(bookItem);
    expect(bookItem).toBeInTheDocument();
    expect(setSelectedBook).toHaveBeenCalledWith(books[0]);
    expect(toggleModal).toHaveBeenCalled();
  });

});
