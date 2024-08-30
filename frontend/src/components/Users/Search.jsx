import SearchInput from "./SearchInput";

const Search = ({ handleSearch }) => {
  return (
    <div className="flex  mt-5 mb-3 gap-8  ">
      <SearchInput customWidth={"200px"} placeholder={"First Name"} handleOnChange={(e) => handleSearch("firstName", e.target.value)} />
      <SearchInput customWidth={"200px"} placeholder={"Last Name"} handleOnChange={(e) => handleSearch("lastName", e.target.value)} />
      <SearchInput customWidth={"250px"} placeholder={"Email"} handleOnChange={(e) => handleSearch("email", e.target.value)} />
      <SearchInput customWidth={"200px"} placeholder={"Mobile No"} handleOnChange={(e) => handleSearch("mobileNo", e.target.value)} />
      <SearchInput customWidth={"100px"} placeholder={"Role"} handleOnChange={(e) => handleSearch("role", e.target.value)} />
    </div>
  );
};

export default Search;
