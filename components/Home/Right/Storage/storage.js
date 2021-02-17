export default function Storage({item,handleStorageChange}) {


  return (
    <div className=" flex flex-col text-center justify-center mx-2 ">
      <button onClick={(e)=>handleStorageChange((item.id))}
        className={`border w-16 h-16 focus:outline-none ${
          item.isActive ? "font-bold border-blue-400  " : "font-medium"
        }`}
      >
        <span>{item.storage} </span>GB
      </button>
    </div>
  );
}
