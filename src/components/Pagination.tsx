
import { Book } from '../interfaces/interface';
interface PaginationProps {
  pages:number[];
  pagesToShow:number[];
  currentPage: number;
  pagesCount:number;
  items:Book[];
  setCurrentPage: (query: number) => void;
}


const Pagination: React.FC<PaginationProps> = (
  { 
    items,
    pagesCount,
    pagesToShow, 
    currentPage,
    setCurrentPage,
    pages,

  }) => {

  return (
    <div>      
      {pagesToShow.length > 1 &&
        <div className='md:flex mt-[50px] border-t border-t-violet-200 px-[20px] pt-[20px]' >
          <div className='
          font-medium 
          font-montserrat
          text-[12px]
          leading-[50px]
          
          w-full
          '>Page {currentPage} of {pagesCount} Page{pagesCount > 1 ? 's': ''} ({items.length} books found)</div>
          
          <div className='w-full max-w-[320px] m-auto h-[49px]  flex justify-between'>
            <div className={`h-[40px] !px-[10px] leading-[40px] 
                text-dmsans cursor-pointer 
                ${currentPage !== 1 ? 'bg-violet-100 text-violet-500':'bg-violet-100 text-violet-200'}
                `}
                onClick={()=>{
                  if(currentPage > 1){setCurrentPage(currentPage - 1)}
                }}
                >Prev</div>
                <div className='flex gap-[5px] w-full justify-center'>
                  {pagesToShow.map((thisPage, index)=>{
                    return(
                      <div className={`h-[40px] !px-[10px] leading-[40px] 
                      text-white text-montserrat cursor-pointer
                      ${currentPage === thisPage ? 'bg-violet-700 text-violet-100': 'bg-violet-100 text-violet-500'}
                      `}
                      key={index}
                      onClick={()=>{
                        setCurrentPage(thisPage)
                      }}
                      >{thisPage}</div>
                    )
                  })}
                </div>

            <div className={`h-[40px] !px-[10px] leading-[40px] 
              text-montserrat cursor-pointer 
              ${currentPage < pages.length ? 'bg-violet-100 text-violet-500':'bg-violet-100 text-violet-200'}
              `}
              onClick={()=>{
              if(currentPage < pages.length){setCurrentPage(currentPage + 1)}
            }}>Next</div>
          </div>
        </div>
        }
    </div>
  );
};

export default Pagination;
