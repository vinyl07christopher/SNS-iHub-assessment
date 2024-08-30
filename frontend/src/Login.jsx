import { FaEnvelope, FaLock } from "react-icons/fa";
import AuthLayout from "./AuthLayout";
import InputBox from "./components/InputBox";
import { useState } from "react";
import AuthButton from "./components/AuthButton";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import myAxios from "../utils/myAxios";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(null);
  const secondaryLink = {
    link: "/signup",
    text: "Create an account",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) return;
    const toastID = toast.loading("Submitting...");
    try {
      const res = await myAxios.post("/auth/login", {
        email,
        password,
      });
      toast.dismiss(toastID);
      toast.success("Login Successful");
      setEmail(null);
      setPassword(null);
      setError(null);
      setTimeout(() => {
        navigate("/users", { replace: true });
      }, 400);
    } catch (error) {
      toast.dismiss(toastID);

      console.log(error);
      toast.error(error.response?.data?.message || "Login failed");
      setError(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <AuthLayout title={"Login"} secondaryLink={secondaryLink}>
      <form onSubmit={handleSubmit}>
        <div className="grid gap-4 mb-7">
          <InputBox type="email" handleOnChange={(e) => setEmail(e.target.value)} placeholder={"Email"} icon={<FaEnvelope />} />
          <InputBox handleOnChange={(e) => setPassword(e.target.value)} placeholder={"Password"} icon={<FaLock />} type={"password"} />
        </div>
        <div className="my-3 text-xs text-red-600 h-4 text-center">{error}</div>
        <AuthButton text={"Log-in"} />
      </form>
    </AuthLayout>
  );
};

export default Login;
