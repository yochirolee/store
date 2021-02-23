import Image from "next/image";
import { Fragment } from "react";
import { useSession } from "next-auth/client";

export default function Sidebar() {
  const [session, loading] = useSession();
  return (
    <Fragment>
      <div className="pt-6 pb-6 bg-gray-700 ">
        {session ? (
          <div className='flex flex-col place-items-center'>
            <img
              className="align-middle w-18 h-18  mb-2 rounded-full text-center"
              src={session.user.image}
              alt="phone"
            ></img>

            <div className="flex flex-col">
              <span>{session.user.name}</span>
              <span className="text-xs">{session.user.email}</span>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className="text-gray-700 h-almost border-r ">
        <ul className="flex-grow md:block px-4 pb-4 md:pb-0 md:overflow-y-auto">
          <li className="my-2">
            <a
              class="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
              href="#"
            >
              Telefonos
            </a>
          </li>
          <li className="my-2">
            <a
              className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
              href="#"
            >
              Cuenta
            </a>
          </li>
          <li className="my-2">
            <a
              className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
              href="#"
            >
              Portfolio
            </a>
          </li>
        </ul>
      </div>
    </Fragment>
  );
}
