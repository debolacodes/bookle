
import { Book } from "../interfaces/interface";
import cancel from "../assets/cancel.svg";

interface ModalProps {
    isOpen:boolean;
    toggleModal:()=>void;
    selectedBook: Book | null;
  }


const Modal: React.FC<ModalProps>= ({ 
    isOpen,  
    toggleModal, 
    selectedBook 
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center pt-[50px] z-50 ">
      <div className="
      bg-white p-6 
      shadow-lg 
      max-w-[500px] 
      w-full rounded-[20px]
      max-h-[calc(100vh-150px)] 
      ">
        <div className="p-[20px] overflow-y-auto h-full">
            <div
                className="h-[40px] w-full flex flex-row-reverse"
            >
                <div className="w-[20px] h-[20px] cursor-pointer"
                onClick={()=>toggleModal()}
                >
                    <img src={cancel} 
                        className="
                        w-full 
                        h-full 
                        object-contain"
                    />
                </div>
            </div>
            {selectedBook !== null &&
            <div>
                <div
                className={`
                  p-[10px] 
                  flex 
                  gap-[15px] 
                  hover:bg-white
                  cursor-pointer
                  `}
                >
                  {selectedBook.volumeInfo.imageLinks?.thumbnail && (
                    <img src={selectedBook.volumeInfo.imageLinks.thumbnail} alt={selectedBook.volumeInfo.title} 
                    className={`w-[120px] h-[150px] object-left object-contain bg-white`}
                    />
                  )}
                  <div className=''>
                    <h2 className='text-[15px] text-montserrat font-medium text-violet-900 leading-[24px] mb-[20px]'>{selectedBook.volumeInfo.title}</h2>
                    <div className="md:col-span-2 text-[12px] text-montserrat leading-[25px]">
                      {typeof selectedBook.volumeInfo.authors !== "undefined" &&
                        <span className="font-bold mr-[5px]">Author{selectedBook.volumeInfo.authors.length > 1 ? 's:':':'}</span> 
                      }
                      {selectedBook.volumeInfo.authors && selectedBook.volumeInfo.authors.length > 0 ? (
                        selectedBook.volumeInfo.authors.map((author, index) => (
                          <span key={index} className="mr-[5px]">{author} {selectedBook.volumeInfo.authors.length !== index+1 ? ',' : ''} </span>))
                        ) : (
                          <span>No author</span>
                        )}
                    </div>
                    <div className='text-[12px] text-montserrat
                    grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 leading-[25px] gap-[10px]
                    '>
                    
                    <div className='text-[12px]'><span className="font-bold mr-[5px]">Publisher:</span> {selectedBook.volumeInfo.publisher ? selectedBook.volumeInfo.publisher: 'Not available'}</div>
                    <div className='text-[12px]'><span className="font-bold mr-[5px]">Published:</span> {selectedBook.volumeInfo.publishedDate}</div>
                    <div className='text-[12px]'><span className="font-bold mr-[5px]">Print type:</span> {selectedBook.volumeInfo.printType}</div>
                    <div className='text-[12px]'><span className="font-bold mr-[5px]">Language:</span> {selectedBook.volumeInfo.language}</div>
                    <div className='text-[12px]'><span className="font-bold mr-[5px]">Rating:</span>{selectedBook.volumeInfo.maturityRating === "NOT_MATURE"
                    ?"General":"For mature Audience only"  }</div>
                    
                    </div>
                  </div>
                </div>
                <div className='text-[12px] mt-[10px] flex text-montserrat'>
                    {selectedBook.volumeInfo.description && selectedBook.volumeInfo.description.length > 0 ? (
                    <div className='text-montserrat'>{selectedBook.volumeInfo.description}</div>
                    ) : (
                    <div>No description available</div>
                    )}
                </div>
            </div>
            }
        </div>
      </div>
    </div>
  );
};

export default Modal;
