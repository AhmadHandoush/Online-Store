import { useEffect, useState } from "react";
import { IoSearchSharp } from "react-icons/io5";

function Search({ setFilteredUsers, users }) {
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    const searchedUser = users.filter(
      (user) =>
        user.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredUsers(searchedUser);
  }, [searchQuery, users]);
  return (
    <div className="w-72 px-2 bg-gray-200 py-2 flex gap-5 rounded items-center ">
      <IoSearchSharp className="size-6 text-gray-400" />
      <input
        type="text"
        placeholder="Search for a user"
        className="bg-transparent border-none outline-none"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
}

export default Search;
