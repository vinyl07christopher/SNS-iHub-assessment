const AuthButton = ({ handleClick, text }) => {
  return (
    <button
      type="submit"
      className=" mx-auto block rounded-full tracking-wide w-[150px]
     py-1 px-4 uppercase text-white bg-black/80 hover:bg-black active:bg-black/80 transition-all "
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default AuthButton;
