

const EmptyBook = () => {
  return (
    <div className="flex w-full gap-[20px] mb-[30px]">
      <div className="w-[150px] h-[150px] bg-[#FAE8FF] rounded-md"></div>
      <div className="w-full flex flex-col gap-[10px]">
        <div className="w-full h-[50px] bg-[#FAE8FF] rounded-md"></div>
        <div className="flex gap-[10px]">
            <div className="w-[50%] h-[40px] bg-[#FAE8FF] rounded-md"></div>
            <div className="w-[50%] h-[40px] bg-[#FAE8FF] rounded-md"></div>
        </div>
      </div>
    </div>
  );
};

export default EmptyBook;
