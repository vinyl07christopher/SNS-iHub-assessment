import AuthLayout from "./AuthLayout";
import toast from "react-hot-toast";
import myAxios from "../utils/myAxios";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthButton from "./components/AuthButton";

const Logout = () => {
  const navigate = useNavigate();
  const checkAuth = async () => {
    try {
      const res = await myAxios.get("http://localhost:4000/api/auth/isAuthorized");
      handleLogout();
    } catch (error) {
      navigate("/", { replace: true });
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  const handleLogout = async () => {
    try {
      const res = await myAxios.post("/auth/logout");
      toast.success("Logged out");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthLayout title={"Logout"}>
      <div className="text-2xl mb-8 font-light text-white">You have been logged out</div>

      <Link to={"/"}>
        <AuthButton text={"Log-in Again"} />
      </Link>
    </AuthLayout>
  );
};

export default Logout;
