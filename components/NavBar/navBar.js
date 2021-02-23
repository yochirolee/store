import NavAvatar from "./navAvatar";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/client";

export default function NavBar() {
  const [session, loading] = useSession();
  return (
    <div className=" tracking-wide text-sm flex flex-row  h-10 items-center bg-gray-800 text-gray-300 font-normal justify-between px-8">
      <div className="flex items-center">
        <Image src="/icons8-mac-os.svg" width="20px" height="20px"></Image>
        <Link href="/publishPhone">
          <a className="ml-2  hidden md:block text-gray-200">Iphone Store</a>
        </Link>
      </div>
      <div className=" hidden md:block">Others</div>
      <NavAvatar session={session} />
    </div>
  );
}

