import Image from "next/image";
import Link from "next/link";
import { signOut } from "next-auth/client";
export default function NavAvatar({ session }) {
  return (
    <div className=" flex flex-row place-items-center  ">
      <div className="mr-4 hidden md:block">
        <Link href="/userProfile">
          <a>{session ? session.user.name ?? session.user.email : "no user"}</a>
        </Link>
      </div>
      <div className="mt-2 items-center ">
        <Link href="/userProfile">
          <Image
            className="rounded-full p-0 "
            src="/profile.jpg"
            alt="Iphones Picture"
            height="35px"
            width="35px"
          ></Image>
        </Link>
      </div>
      <div className="ml-4 flex cursor-pointer place-items-center items-center">
        <Image
          onClick={() => signOut()}
          className="cursor-pointer"
          src="/exit-50.png"
          alt="exit"
          height="20px"
          width="20px"
        ></Image>
      </div>
    </div>
  );
}
