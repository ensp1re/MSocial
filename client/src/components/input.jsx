import { FaSearch } from "react-icons/fa";

const Input = ({ text }) => {
  return (
    <div
      className={`flex items-center w-full placeholder:p-4 pl-3 ${text ? "bg-gray-50" : "bg-gray-100"} rounded-3xl outline-none`}
    >
      <FaSearch className="text-gray-400" />
      <input
        placeholder={`${text ? text : "Search"}`}
        className={`${text ? "bg-gray-50" : "bg-gray-100"} w-full  rounded-3xl p-3 outline-none`}
      />
    </div>
  );
};

export default Input;
