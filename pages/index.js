import Head from "next/head";
import Image from "next/image";
import LoginExternal from "../components/Login/loginExternal";
import LoginForm from "../components/Login/loginForm";
import RegisterForm from "../components/Login/registerForm";
import React, { useState } from "react";

export default function Home() {
  const [asAccount, setAsAccount] = useState(true);

  return (
    <div>
      <Head>
        <title>Vende tu Iphone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="md:container md:mx-auto h-screen grid grid-cols-2 gap-2 ">
        <div className="flex flex-col text-center ">
          <div className="flex flex-col flex-1 mt-32">
            <h3 className="text-5xl mb-4  text-gray-800 tracking-tight font-semibold ">
              Vender tu Iphone,
            </h3>
            <h4 className="text-2xl text-gray-700 font-semibold">
              nunca ha sido tan sencillo
            </h4>
            <span className='text-blue-600 font-bold mt-4'>Mas Info</span>
          </div>
          <div className="place-items-end	">
            <Image
              alt="Iphones Picture"
              src="/switch_to_iphone.jpg"
              width="500px"
              height="450px"
            ></Image>
          </div>
        </div>

        <div className="flex  container">
          <div className="flex flex-col  mx-auto my-auto">
            {asAccount ? (
              <>
                <LoginForm asAccount={asAccount} setAsAccount={setAsAccount} />
              </>
            ) : (
              <>
                <RegisterForm
                  asAccount={asAccount}
                  setAsAccount={setAsAccount}
                />
              </>
            )}

            <div className="mt-4 border-t">
              <LoginExternal />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
