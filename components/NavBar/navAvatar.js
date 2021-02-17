import Image from "next/image";
export default function NavAvatar() {
  return (
    <div className=" flex flex-row place-items-center  ">
      <div className="mr-4 hidden md:block">
        <p>yleecruz@gmail.com</p>
      </div>
      <div className="mt-2 items-center ">
        <Image
          className="rounded-full p-0 "
          src="/profile.jpg"
          alt="Iphones Picture"
          height="35px"
          width="35px"
        ></Image>
      </div>
      <div className="ml-4 flex cursor-pointer place-items-center items-center">
        <Image src="/exit-50.png" alt="exit" height="20px" width="20px"></Image>
      </div>
    </div>
  );
}
