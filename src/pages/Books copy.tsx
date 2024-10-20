import { useState } from 'react'
import axios from 'axios';
import '../App.css'
import { Book } from '../interfaces/interface'
import BookList from '../components/BookList'
import BookSearch from '../components/BookSearch';

function Books() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const API_KEY = 'AIzaSyCde6xK4PCv129Sf3lHY56-47R4JGB5Ks4'; // Replace with your API key

  const updateLoading = (value:boolean) =>{
    setLoading(value)
  }

  const updateError = (value:string | null) =>{
    setError(value)
  }
  const searchBooks = async (query: string) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${API_KEY}`
      );
      console.log(response.data.items)
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
    <div className='w-screen h-screen '>
      <BookSearch 
      searchTerm={searchTerm} 
      setSearchTerm={setSearchTerm} 
      handleSearch={handleSearch}
      setLoading={setLoading}
      loading={loading}
      error={error}
      setError={updateError}
      />
     
     <BookList 
        books = {books}
        setLoading={setLoading}
        loading={loading}
        error={error}
        setError={updateError}
        />
    </div>
  )
}

export default Books
