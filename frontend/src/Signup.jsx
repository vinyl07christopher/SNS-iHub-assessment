import { FaEnvelope, FaLock, FaPhone, FaUser, FaUserClock } from "react-icons/fa";
import AuthLayout from "./AuthLayout";
import InputBox from "./components/InputBox";
import { useState } from "react";
import AuthButton from "./components/AuthButton";
import myAxios from "../utils/myAxios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState(null);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [mobileNo, setMobileNo] = useState(null);
  const [role, setRole] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(null);
  const secondaryLink = {
    link: "/",
    text: "Log in",
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password || !firstName || !lastName || !mobileNo || !role) return;
    const toastID = toast.loading("Submitting...");
    try {
      const res = await myAxios.post("/auth/signup", {
        email,
        firstName,
        lastName,
        mobileNo,
        role,
        password,
      });
      toast.dismiss(toastID);
      toast.success("Registered Successfully");
      setEmail(null);
      setFirstName(null);
      setLastName(null);
      setMobileNo(null);
      setRole(null);
      setPassword(null);
      setError(null);
      setTimeout(() => {
        navigate("/", { replace: true });
      }, 400);
    } catch (error) {
      toast.dismiss(toastID);

      console.log(error);
      toast.error("Signup failed");
      setError("Signup failed");
    }
  };

  return (
    <AuthLayout title={"Signup"} secondaryLink={secondaryLink}>
      <form onSubmit={handleSubmit}>
        <div className="grid gap-3 ">
          <InputBox handleOnChange={(e) => setFirstName(e.target.value)} placeholder={"First Name"} icon={<FaUser />} autoComplete="off" />
          <InputBox handleOnChange={(e) => setLastName(e.target.value)} placeholder={"Last Name"} icon={<FaUser />} autoComplete="off" />
          <InputBox handleOnChange={(e) => setMobileNo(e.target.value)} placeholder={"Mobile No."} icon={<FaPhone />} autoComplete="off" />
          <InputBox type="select" handleOnChange={(e) => setRole(e.target.value)} icon={<FaUserClock />} autoComplete="off" />

          <InputBox type="email" handleOnChange={(e) => setEmail(e.target.value)} placeholder={"Email"} icon={<FaEnvelope />} autoComplete="off" />
          <InputBox
            handleOnChange={(e) => setPassword(e.target.value)}
            placeholder={"Password"}
            icon={<FaLock />}
            type="password"
            autoComplete="new-password"
          />
        </div>
        <div className="my-3 text-xs text-red-600 h-4 text-center">{error}</div>
        <AuthButton text={"Sign-up"} />
      </form>{" "}
    </AuthLayout>
  );
};

export default Signup;
