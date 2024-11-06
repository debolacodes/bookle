import React, { useState, useMemo } from 'react';
import { Book } from '../../interfaces/interface';

// Define the type for the HOC props
export interface WithPaginationProps {
  books: Book[];
}

const withPagination = <P extends object>(Component: React.ComponentType<P>) => {
  return (props: P & WithPaginationProps) => {
    const { books } = props;
    
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10; // You can adjust this number based on your requirement

    const pagesCount = Math.ceil(books.length / itemsPerPage);
    
    // Create an array of pages (e.g., 1, 2, 3, ...)
    const pages = useMemo(() => {
      return Array.from({ length: pagesCount }, (_, index) => index + 1);
    }, [pagesCount]);

    // Calculate the books to display on the current page
    const currentBooks = useMemo(() => {
      const startIndex = (currentPage - 1) * itemsPerPage;
      return books.slice(startIndex, startIndex + itemsPerPage);
    }, [currentPage, books]);

    return (
      <Component
        {...props}
        paginationProps={{
          currentPage,
          setCurrentPage,
          pagesCount,
          pages,
          items: currentBooks,
          pagesToShow: pages.slice(0, 5), // For example, show first 5 pages
        }}
      />
    );
  };
};

export default withPagination;
