import Link from "next/link";

const LoginContainer = () => {
  return (
    <div className="w-full max-w-md mx-auto mt-8">
      <div 
        className=" mb-4 flex items-center justify-center rounded-full "
      >
        <span className="text-xl p-1 font-semibold text-center text-gray-500">
          Login
        </span>
      </div>
      <form
        //   onSubmit={handleSubmit}
        className="w-full flex flex-col bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            E-mail or Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
            name="username"
            //   value={formData.username}
            //   onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="text"
            placeholder="Password"
            name="password"
            //   value={formData.nickname}
            //   onChange={handleChange}
          />
        </div>
        <div className="w-full flex gap-1 text-sm text-gray-500 mb-4">
            <span>
            If you don't have an account -
            </span>
            <Link href={"/register"} className="text-green-500 hover:underline ">
             register
            </Link>

        </div>
        <div className="w-full flex justify-center items-center">
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-200"
            type="submit"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginContainer;
