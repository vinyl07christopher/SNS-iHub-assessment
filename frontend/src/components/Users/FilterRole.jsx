import { IoFilter } from "react-icons/io5";

const FilterRole = ({ handleRoleChange }) => {
  return (
    <div className="flex items-center gap-2 justify-end  text-gray-700 text-sm">
      <label htmlFor="role-filter" className="flex items-center gap-2 cursor-pointer">
        <IoFilter /> Filter by Role
      </label>
      <select id="role-filter" onChange={handleRoleChange} className="bg-gray-100 px-2 py-1">
        <option value="">All Roles</option>
        <option value="User">User</option>
        <option value="Admin">Admin</option>
        <option value="Guest">Guest</option>
      </select>
    </div>
  );
};

export default FilterRole;
