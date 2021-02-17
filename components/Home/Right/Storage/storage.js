export default function Storage() {
  const storageActive = true;

  return (
    <div className=" flex flex-col text-center justify-center mx-2">
      <button
        className={`border w-16 h-16 ${
          storageActive ? "font-bold border-blue-400 " : "font-medium"
        }`}
      >
        <span>256 </span>GB
      </button>
    </div>
  );
}
