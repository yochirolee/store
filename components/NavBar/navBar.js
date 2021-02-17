import NavAvatar from "./navAvatar";
import Image from "next/image";
export default function NavBar() {
  return (
    <div className=" tracking-wide text-sm flex flex-row w-screen h-10 items-center bg-gray-800 text-gray-300 font-normal justify-between px-8">
      <div className="flex items-center">
        <Image  src="/icons8-mac-os.svg" width="20px" height="20px"></Image>
         <a className='ml-2  hidden md:block text-gray-200'>Iphone Store</a>
      </div>
      <div className=' hidden md:block'>Others</div>
      <NavAvatar />
    </div>
  );
}
