import { BookSearchProps } from '@/interfaces/interface';
import search from '../assets/search.svg'
import bookstacks from '../images/book-stack.png'

// Define the props interface
const BookSearch: React.FC<BookSearchProps> = ({searchTerm, 
  setSearchTerm, 
  handleSearch,
  
}) => {

  const handleKeyDown = (e: { key: string; }) => {
    if (e.key === 'Enter') {
      handleSearch()
      // You can add custom functionality here, such as submitting the input
    }
  };
  
  return (
    <div className='bg-white w-full flex justify-between gap-[10px] rounded-[20px] pl-[20px]'>
        <div
          className='h-[50px] w-[70px] p-[10px]'
        >
          <img src={bookstacks} className='w-[30px] h-[30px] object-contain'/>
        </div>
        <input
          type="text"
          value={searchTerm}
          onKeyDown={handleKeyDown}
          className='
          h-[50px] 
          bg-white 
          w-full 
          font-montserrat
          px-[0px]
          outline-none focus:ring-0
          '
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for books..."
        />
        <div 
        className='
        leading-[30px]
        px-[20px]
        py-[10px] 
        bg-violet-700 hover:bg-violet-500
        cursor-pointer
        text-white
        font-bold
        gap-[5px]
        rounded-[20px]
        shadow-md
        font-montserrat
        flex
        '
        onClick={()=>handleSearch()}
        >
          <div className='
          w-[30px] 
          h-[30px]
          '>
            <img src={search} className='w-[20px] h-[20px] m-[5px] object-center object-contain' />
          </div>
          Search</div>
    </div>
  );
};

export default BookSearch;
