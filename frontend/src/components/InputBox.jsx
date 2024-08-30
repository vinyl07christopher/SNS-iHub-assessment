import { useRef, useState } from "react";
import { FaEye } from "react-icons/fa";

const InputBox = ({ type = "text", autoComplete, handleOnChange, placeholder, icon }) => {
  const inputRef = useRef();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const focusInput = () => inputRef.current.focus();
  return (
    <div className="relative  ">
      <div
        onClick={focusInput}
        className="opacity-65 hover:opacity-100 rounded-md cursor-pointer absolute h-10 w-10 flex justify-center items-center"
      >
        {icon}
      </div>
      {type === "select" ? (
        <select
          onChange={handleOnChange}
          className=" focus:bg-black/50 rounded-md 
          text-[0.9rem] text-white/60
           bg-black/20 w-[250px] h-10 pl-10 
           pr-4 outline-none"
          required
        >
          <option className="bg-black/60 text-white hover:bg-black/80" value="">
            Select Role
          </option>
          <option className="bg-black/60 text-white hover:bg-black/80" value="User">
            User
          </option>
          <option className="bg-black/60 text-white hover:bg-black/80" value="Admin">
            Admin
          </option>
          <option className="bg-black/60 text-white hover:bg-black/80" value="Guest">
            Guest
          </option>
        </select>
      ) : (
        <input
          ref={inputRef}
          autoComplete={autoComplete}
          className=" focus:bg-black/50 rounded-md text-[0.9rem] placeholder:text-white/60 bg-black/20 w-[250px] h-10 pl-10 pr-4 outline-none"
          type={type === "password" ? (!passwordVisible ? "password" : "text") : type}
          required
          minLength={type === "password" ? 8 : undefined}
          onChange={handleOnChange}
          placeholder={placeholder}
        />
      )}
      {type === "password" && (
        <div
          className={`${passwordVisible && "opacity-100"} hover:opacity-80 opacity-50 rounded-md cursor-pointer
       absolute right-5 top-5 translate-x-[50%] translate-y-[-50%]
       flex  justify-center items-center`}
        >
          <FaEye onClick={() => setPasswordVisible((v) => !v)} />
        </div>
      )}
    </div>
  );
};

export default InputBox;
