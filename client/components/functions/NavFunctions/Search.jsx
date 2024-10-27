import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <div className="flex-1">
      <form action="" className="relative w-full">
        <input
          className="px-10 py-2 rounded-full w-full xl:w-[600px] h-[40px] md:h-[50px] outline-none bg-[#f2f2f2] shadow-md"
          placeholder='ابحث عن "رز سيدي هشام"'
          type="search"
        />
        <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 md:w-6" />
      </form>
    </div>
  );
};

export default Search;
