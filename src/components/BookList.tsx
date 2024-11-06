import React, { useEffect } from 'react';
import { Book } from '../interfaces/interface';
import Pagination from './Pagination';
import EmptyBook from './EmptyBook';
import withPagination from './hoc/withPagination'; // Import the HOC

// Define the props interface for BookList
interface BookListProps {
  books: Book[];
  loading: boolean;
  error: string | null;
  setLoading: (value: boolean) => void;
  setError: (value: string | null) => void;
  setSelectedBook: (value: Book | null) => void;
  toggleModal: () => void;
  searchedTerm: string;
  paginationProps: {
    currentPage: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
    pagesCount: number;
    pagesToShow: number[];
    pages: number[];
    items: Book[]; // Ensure 'items' is here
  };
}

const BookList: React.FC<BookListProps> = ({
  books,
  setLoading,
  loading,
  error,
  setError,
  setSelectedBook,
  toggleModal,
  searchedTerm,
  paginationProps,
}) => {
  useEffect(() => {
    if (books.length > 0) {
      setLoading(false);
      setError('');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [books]);

  return (
    <div className="">
      {loading && (
        <div className="mb-[10px] p-[10px] font-medium font-montserrat text-[12px]">
          Searching for books...
        </div>
      )}
      {error && <p>{error}</p>}
      {paginationProps.items.length > 0 && (
        <>
          <div className="mb-[10px] p-[10px] font-montserrat text-[15px] font-bold">
            Showing results for{' '}
            <span className="font-bold capitalize text-violet-700 text-montserrat">
              {searchedTerm}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {paginationProps.items.map((book) => (
              <div key={book.id}>
                <div
                  className="p-[20px] flex gap-[15px] rounded-[20px] hover:shadow-sm hover:bg-violet-50 cursor-pointer"
                  onClick={() => {
                    toggleModal();
                    setSelectedBook(book);
                  }}
                >
                  {book.volumeInfo.imageLinks?.thumbnail && (
                    <img
                      src={book.volumeInfo.imageLinks.thumbnail}
                      alt={book.volumeInfo.title}
                      className="w-[120px] h-[150px] object-left object-contain bg-white"
                    />
                  )}
                  <div>
                    <div className="text-[12px] flex flex-col text-montserrat flex-wrap">
                      <div className="text-[15px] mb-[10px]">{book.volumeInfo.title}</div>
                      <div>
                        {typeof book.volumeInfo.authors !== 'undefined' && (
                          <span className="font-bold mr-[10px]">
                            Author{book.volumeInfo.authors.length > 1 ? 's :' : ' :' }
                          </span>
                        )}
                        {book.volumeInfo.authors && book.volumeInfo.authors.length > 0 ? (
                          book.volumeInfo.authors.map((author, index) => (
                            <span key={index} className="mr-[5px]">
                              {author} {book.volumeInfo.authors.length !== index + 1 ? ',' : ''}
                            </span>
                          ))
                        ) : (
                          <span>No author</span>
                        )}
                      </div>
                    </div>
                    <div className="mt-[10px] text-[12px]">
                      <span className="font-bold mr-[10px]">Published:</span> {book.volumeInfo.publishedDate}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
      {paginationProps.items.length === 0 && (
      <>
        <EmptyBook />
        <EmptyBook />
      </>
      )}
      <Pagination
        items={paginationProps.items}
        pagesCount={paginationProps.pagesCount}
        pagesToShow={paginationProps.pagesToShow}
        currentPage={paginationProps.currentPage}
        setCurrentPage={paginationProps.setCurrentPage}
        pages={paginationProps.pages}
      />
    </div>
  );
};

export default withPagination(BookList);
