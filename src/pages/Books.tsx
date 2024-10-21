import { useState } from 'react'
import axios from 'axios';
import '../App.css'
import { Book } from '../interfaces/interface'
import BookList from '../components/BookList'
import BookSearch from '../components/BookSearch';
import Modal from "../components/Modal";
import book from "../assets/book.svg"

function Books() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchedTerm, setSearchedTerm] = useState<string>('');
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setOpenModal] = useState<boolean>(false)
  const [selectedBook, setSelectedBook] = useState<Book | null>(null)
  const toggleModal = () =>{setOpenModal(!isModalOpen) }
  const API_KEY = 'AIzaSyCde6xK4PCv129Sf3lHY56-47R4JGB5Ks4'; // Replace with your API key

  

  const updateError = (value:string | null) =>{
    setError(value)
  }
  const searchBooks = async (query: string) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${API_KEY}&maxResults=40`
      );
      setSearchedTerm(searchTerm)
      setBooks(response.data.items || []);
      
      
    } catch (err) {
      setError('An error occurred while fetching data.');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    if (searchTerm) {
      searchBooks(searchTerm);
    }
  };

  return (
    <div className='w-screen h-screen 
    p-6 sm:p-6 md:p-8 lg:p-10 xl:p-12 
    overflow-x-hidden 
    g-gray-50
    '>
        <div>
            <img src={book} className='w-[150px] m-auto mb-[50px]'/>
        </div>
        <div 
        className='
        w-full 
        h-[70px] 
        bg-violet-50 
        p-[10px]
        shadow-sm
        rounded-[20px]
        mb-[10px]
        '
        >
            <BookSearch 
            searchTerm={searchTerm} 
            setSearchTerm={setSearchTerm} 
            handleSearch={handleSearch}
            />
        </div>

        <div className='
        p-[10px] 
        h-full
        
        '>
        <BookList 
        books = {books}
        setLoading={setLoading}
        loading={loading}
        error={error}
        setError={updateError}
        setSelectedBook={setSelectedBook}
        toggleModal={toggleModal}
        searchedTerm={searchedTerm}
        />
        </div>

        <Modal 
        isOpen={isModalOpen} 
        toggleModal={toggleModal} 
        selectedBook={selectedBook}
        />
    </div>
      
  )
}

export default Books
