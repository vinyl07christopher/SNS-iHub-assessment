import { ImExit } from "react-icons/im";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="p-4 flex text-gray-800 justify-end gap-4 items-center">
      <Link to={"/logout"} className="bg-blue-900 flex gap-1 items-center text-xs tracking-wide uppercase px-3 py-2 text-white hover:bg-blue-800">
        <ImExit /> Logout
      </Link>
    </div>
  );
};

export default NavBar;
