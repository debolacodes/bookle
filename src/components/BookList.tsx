import { useEffect, useState } from 'react';
import { Book } from '../interfaces/interface';
import Pagination from './Pagination';
import EmptyBook from './EmptyBook';
// Define the props interface
interface BookListProps {
  books: Book[];
  loading:boolean;
  error:string | null;
  setLoading: (value: boolean) => void;
  setError:(value: string | null) => void;
  setSelectedBook:(value: Book | null) => void;
  toggleModal:()=>void;
  searchedTerm: string;
}

const BookList: React.FC<BookListProps> = ({books, 
  setLoading,
  loading,
  error,
  setError,
  setSelectedBook,
  toggleModal,
  searchedTerm
}) => {
  
  

  useEffect(()=>{
    if(books.length > 0){
      setLoading(false)
      setError("")
    }
  },[books])

  

  const [booksFiltered, setBooksFilterd] = useState<Book[]>([])
  const [currentPage, setCurrentPage] = useState(1);
	const booksPerPage :number = 10;

	// Get current phone numbers
	const [currentbooks, setCurrentbooks] = useState<Book[]>([]) 
	const [pagesCount, setPagesCount] = useState(0)
	const [pages, setPages] = useState([0])
	const [pagesToShow, setPagesToShow] = useState<number[]>([])
	
  const getCenterElements = (arr:number[], i:number) =>{
		const n = arr.length;
	
		if (i === 0) {
			// Return i and the next 4 elements
			return arr.slice(i, i + 5);
		} else if (i === 1) {
			// Return i-1, i, and next 3 elements
			return arr.slice(i - 1, i + 4);
		} else if (i === 2) {
			// Return i-2, i-1, i, and the next 2 elements
			return arr.slice(i - 2, i + 3);
		} else if (i === n - 2) {
			// Return i-3, i-2, i-1, and i (last element)
			return arr.slice(Math.max(i - 3, 0), i + 2);
		} else if (i === n - 1) {
			// Return i-3, i-2, i-1, and i (last element)
			return arr.slice(Math.max(i - 4, 0), i + 1);
		} else {
			// General case: return 5 elements centered on index i
			return arr.slice(Math.max(i - 2, 0), Math.min(i + 3, n));
		}
	}

  useEffect(() => {
    setBooksFilterd(books)    
  }, [books])


	useEffect(()=>{
		const indexOfLastbook_ = currentPage * booksPerPage;
		const indexOfFirstbook_ = indexOfLastbook_ - booksPerPage;
		let currentbooks_:Book[] = []
		const pagesCount_ = booksPerPage !== 0 ? Math.ceil(booksFiltered.length / booksPerPage) : 0
		const pages_ = Array.from({ length: pagesCount_ }, (_, i) => i + 1);
		const pagesToShow_:number[] = getCenterElements(pages_, currentPage-1);
		currentbooks_ = booksFiltered.slice(indexOfFirstbook_, indexOfFirstbook_ + booksPerPage);
		setCurrentbooks(currentbooks_)
		setPagesCount(pagesCount_)
		setPages(pages_)
		setPagesToShow(pagesToShow_)
		
	},[booksFiltered, currentPage, booksPerPage])

  return (
    <div className='' >
      {loading && 
      <div className='
      mb-[10px] 
      p-[10px]
      font-medium 
      font-montserrat
      text-[12px]
      '>
        Searching for books...
      </div>}
      {error && <p>{error}</p>}

        {currentbooks.length > 0 ?
        <div>
          
          <div className='
            mb-[10px] 
            p-[10px]
            font-montserrat
            text-[15px]
            font-bold
          '>Showing results for <span className='font-bold capitalize text-violet-700 text-montserrat'>{searchedTerm}</span></div>

          <div className='
          grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4
          '>
            {currentbooks.map((book) => (
              <div key={book.id}>
                <div
                className={`
                  p-[20px] 
                  flex 
                  gap-[15px] 
                  rounded-[20px]
                  hover:shadow-sm
                  hover:bg-violet-50
                  cursor-pointer
                  `}
                  onClick={()=>{
                    toggleModal()
                    setSelectedBook(book)
                  }}

                >
                  {book.volumeInfo.imageLinks?.thumbnail && (
                    <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} 
                    className={`w-[120px] h-[150px] object-left object-contain bg-white`}
                    />
                  )}
                  <div className=''>
                    <h2 className='text-[20px] text-montserrat font-medium text-gray-900 leading-[24px] mb-[20px]'>{book.volumeInfo.title}</h2>
                    <div className='text-[10px] flex text-montserrat flex-wrap'>
                      {book.volumeInfo.authors && book.volumeInfo.authors.length > 0 ? (
                        book.volumeInfo.authors.map((author, index) => (
                          <div key={index}>{author} | </div>
                        ))
                      ) : (
                        <div>No author</div>
                      )}
                    </div>
                    <div className='mt-[10px] text-[10px]'>Published: {book.volumeInfo.publishedDate}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        : 
        <EmptyBook />
        }
      

      <Pagination
      items={books}
      pagesCount={pagesCount}
      pagesToShow={pagesToShow} 
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      pages={pages}

      />
    </div>
  );
};

export default BookList;
