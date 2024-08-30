import { useRef } from "react";
import { FaSearch } from "react-icons/fa";

const SearchInput = ({ placeholder, handleOnChange, customWidth }) => {
  const inputRef = useRef();
  const focusInput = () => inputRef.current.focus();
  return (
    <div className="relative">
      <div
        onClick={focusInput}
        className="cursor-pointer
       h-8 w-8 absolute items-center justify-center flex"
      >
        <FaSearch className="text-xs opacity-50" />
      </div>
      <input
        ref={inputRef}
        type="text"
        id="input-box"
        className={`${"w-[" + customWidth + "]"} h-8 pl-8 rounded-md  px-4 text-sm bg-gray-100`}
        onChange={handleOnChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default SearchInput;
