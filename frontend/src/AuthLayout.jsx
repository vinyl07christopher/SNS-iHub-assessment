import { FaUserCircle } from "react-icons/fa";
import boyLogo from "./assets/boyLogo.svg";
import { Link } from "react-router-dom";

const AuthLayout = ({ title, secondaryLink, children }) => {
  return (
    <div className="min-h-screen grid md:grid-cols-5 bg-[#fefefe]">
      <div className="flex md:justify-center md:col-span-3">
        <img
          src={boyLogo}
          alt="homebg"
          className="w-[100%] md:w-auto h-[80svh]  md:h-[100svh]
         "
        />
      </div>
      <div className="bg-[#A250B7] p-4 md:col-span-2 text-white flex flex-col justify-center">
        <div className="table mx-auto pt-8 pb-8 bg-white/30 rounded-md shadow-md px-4 md:px-8 relative">
          <FaUserCircle className="text-5xl bg-white rounded-full text-[#a250b7] absolute top-0 translate-y-[-50%] translate-x-[-50%] left-[50%]" />

          <div
            className=" mb-6
           uppercase   text-center text-xl 
           tracking-wider opacity-80"
          >
            {title}
          </div>

          {children}

          {secondaryLink && (
            <Link className="mt-2 table  text-sm mx-auto text-gray-800 hover:text-black" to={secondaryLink.link}>
              {secondaryLink.text}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
