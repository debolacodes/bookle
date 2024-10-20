import { Book } from '../interfaces/interface';
interface BookDetailProps {
  books: Book[];
}

const BookDetail: React.FC<BookDetailProps> = ({books}) => {
  
  
  return (
    <div className='' >
        <div className='md:flex gap-[20px] h-screen'>
          <div className='
          w-full 
          h-[150px]
          bg-violet-100
          sm:h-[200px] 
          md:h-[400px] md:w-[300px] 
          lg:h-[400px] md:w-[300px]
          '></div>
          <div className='p-[10px]'>
            <div className='font-bold 
            text-montserrat
            text-[30px]'>This is a title</div>
            <div className=' 
            text-montserrat
            text-[16px]'>Authors: This is a title</div>

            <div>
                <div></div>
            </div>
          </div>
        </div>
        
    </div>
      
  );
};

export default BookDetail;
