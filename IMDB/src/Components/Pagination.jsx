const Pagination = ({ handleNext, handlePrevious, pageNo }) => {
    return (
        <div className="flex w-3/6 justify-center mx-auto mb-5">
            <div
                className="h-14 w-14 flex justify-center items-center bg-gray-400 rounded-2xl p-2 cursor-pointer"
                onClick={handlePrevious}
            >
                <i className="fa-solid fa-arrow-left font-bold text-white text-2xl "></i>
            </div>
            <div className="p-3 text-2xl">{pageNo}</div>
            <div
                className="h-14 w-14 flex justify-center items-center bg-gray-400 rounded-2xl p-2 cursor-pointer"
                onClick={handleNext}
            >
                <i className="fa-solid fa-arrow-right font-bold text-white text-2xl"></i>
            </div>
        </div>
    );
};

export default Pagination;
