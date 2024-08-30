import { useEffect, useRef, useState } from "react";
import NavBar from "./components/NavBar";
import { DNA } from "react-loader-spinner";
import myAxios from "../utils/myAxios";
import Table from "./components/Users/Table";
import FilterRole from "./components/Users/FilterRole";
import Search from "./components/Users/Search";
import { useNavigate } from "react-router-dom";

const UserList = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState(null);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [mobileNo, setMobileNo] = useState(null);
  const [roleSearch, setRoleSearch] = useState(null);
  const [roleFilter, setRoleFilter] = useState(null);
  const abortControllerRef = useRef(null);
  const [users, setUsers] = useState({});

  const checkAuth = async () => {
    try {
      await myAxios.get("http://localhost:4000/api/auth/isAuthorized");
    } catch (error) {
      navigate("/", { replace: true });
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  const getUsers = async () => {
    if (abortControllerRef.current) abortControllerRef.current.abort();

    abortControllerRef.current = new AbortController();
    const signal = abortControllerRef.current.signal;

    try {
      const res = await myAxios.get("http://localhost:4000/api/users", {
        params: {
          email,
          firstName,
          lastName,
          mobileNo,
          roleSearch,
          roleFilter,
        },
        signal,
      });
      setUsers(res.data);
      setTimeout(() => {
        setLoading(false);
      }, 300);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSearch = (field, value) => {
    switch (field) {
      case "email":
        setEmail(value);
        break;
      case "firstName":
        setFirstName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "mobileNo":
        setMobileNo(value);
        break;
      case "role":
        setRoleSearch(value);
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    getUsers();
  }, [email, firstName, lastName, mobileNo, roleSearch, roleFilter]);

  return (
    <div className="bg-slate-100 min-h-screen  ">
      <NavBar />
      <div className="bg-white mt-12 md:w-4/5 table hover:shadow-md rounded-md m-auto p-4">
        <FilterRole handleRoleChange={(e) => setRoleFilter(e.target.value)} />
        <Search handleSearch={handleSearch} />
        <div className="text-sm">
          <div className="bg-blue-900 text-left text-white uppercase flex flex-1 ">
            <div className="font-normal  w-[200px]  my-2 mx-4">First Name</div>
            <div className="font-normal  w-[200px]  my-2 mx-4">Last Name</div>
            <div className="font-normal  w-[250px]  my-2 mx-4">Email</div>
            <div className="font-normal  w-[200px]  my-2 mx-4">Mobile No.</div>
            <div className="font-normal  w-[100px]  my-2 mx-4">Role</div>
          </div>
          {loading ? (
            <div className="flex  flex-1 justify-center items-center">
              <DNA visible={true} className="my-8" height="60" width="60" ariaLabel="dna-loading" wrapperStyle={{}} wrapperClass="dna-wrapper" />
            </div>
          ) : users.length > 0 ? (
            <Table users={users} />
          ) : (
            <div className="text-center opacity-60 my-6">no users</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserList;
