import Link from "next/link";
import Avatar from "./Avatar";
import Button from "./Button";

const Suggested = () => {
  return (
    <div className="w-full flex justify-between items-center p-2 hover:bg-gray-200 transition duration-200 cursor-pointer">
      <div className="flex flex-row gap-2 items-center">
        <div className="relative min-w-10">
          <Avatar src="/logo.png" type={"md"} />
        </div>
        <div className="flex flex-col min-w-10 max-w-[120px]">
          <Link href={"#"} className=" text-gray-600 font-semibold hover:opacity-75 transition duration-200">Enspire</Link>
          <Link href={"#"}  className="text-secondary">@enspire</Link>
        </div>
      </div>
      <div className="flex">
        <Button text={"Follow"} />
      </div>
    </div>
  );
};

export default Suggested;
