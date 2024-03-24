const Button = ({ text, onClick, type }) => {
  return (
    <>
      {type === "2" ? (
        <div className="flex items-center justify-center p-2 min-w-[20px] rounded-full bg-white hover:bg-green-300 transition duration-300 font-bold border border-green-500">
          <button onClick={onClick}>{text}</button>
        </div>
      ) : (
        <div className="flex items-center justify-center p-1 min-w-[20px] rounded-full bg-green-400 hover:bg-green-300 transition duration-300 text-white font-bold">
          <button onClick={onClick}>{text}</button>
        </div>
      )}
    </>
  );
};

export default Button;
