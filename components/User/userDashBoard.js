import Image from "next/image";
import Sidebar from "./sideBar";
export default function UserDashBoard() {
  return (
    <div className="grid grid-cols-5  ">
      <div className=" col-span-1 h-screen  text-center text-white  ">
       <Sidebar/>
      </div>

      <div className="grid grid-cols-4 mt-6 gap-4 col-span-3 place-items-center   ">
        sadfasdfasdf
      </div>
    </div>
  );
}
