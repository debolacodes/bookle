
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
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center pt-[100px] z-50 ">
      <div className="bg-white p-6 shadow-lg max-w-[500px] w-full rounded-[20px]
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
                    <h2 className='text-[20px] text-montserrat font-medium text-violet-900 leading-[24px] mb-[20px]'>{selectedBook.volumeInfo.title}</h2>
                    <div className='text-[10px] flex text-montserrat flex-wrap'>
                      {selectedBook.volumeInfo.authors && selectedBook.volumeInfo.authors.length > 0 ? (
                        selectedBook.volumeInfo.authors.map((author, index) => (
                          <div key={index}>{author} | </div>
                        ))
                      ) : (
                        <div>No author</div>
                      )}
                    </div>
                    <div className='mt-[10px] text-[10px]'>Published: {selectedBook.volumeInfo.publishedDate}</div>
                    <div className='mt-[10px] text-[10px]'>Print type: {selectedBook.volumeInfo.printType}</div>
                    <div className='mt-[10px] text-[10px]'>Language: {selectedBook.volumeInfo.language}</div>
                    <div className='mt-[10px] text-[10px]'>Rating: {selectedBook.volumeInfo.maturityRating === "NOT_MATURE"
                    ?"General":"For mature Audience only"  }</div>

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
