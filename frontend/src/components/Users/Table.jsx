const Table = ({ users }) => {
  return users.map((user, index) => (
    <div className="text-gray-700 hover:bg-gray-100 flex flex-1 " style={{ borderBottom: "1px solid #ddd" }} key={index}>
      <div className="my-2 mx-4 w-[200px]">{user.firstName}</div>
      <div className="my-2 mx-4 w-[200px]">{user.lastName}</div>
      <div className="my-2 mx-4 w-[250px]">{user.email}</div>
      <div className="my-2 mx-4 w-[200px]">{user.mobileNo}</div>
      <div className="my-2 mx-4 w-[100px]">{user.role}</div>
    </div>
  ));
};

export default Table;
