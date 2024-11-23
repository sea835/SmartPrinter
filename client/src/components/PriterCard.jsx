const PrinterCard = ({ printer }) => {
  return (
    <div className="w-[300px] h-[320px] bg-white border-gray-300 border-2 rounded-xl flex flex-col items-center">
      <h3 className="text-[20px] font-semibold mt-4">{printer.name}</h3>
      <img
        src={printer.image}
        alt=""
        className="w-[300px] h-[200px] object-cover"
      />
      <div className="flex justify-between items-center w-5/6 pt-4">
        <button className="bg-[#f05258] text-white px-4 py-1 rounded-full w-[120px]">
          Select
        </button>
        <button className="bg-[#1f89db] text-white px-4 py-1 rounded-full w-[120px]">
          Information
        </button>
      </div>
    </div>
  );
};

export default PrinterCard;
