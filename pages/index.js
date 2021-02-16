import Head from "next/head";
import Image from "next/image";
import LoginExternal from "../components/Login/loginExternal";
import LoginForm from "../components/Login/loginForm";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Vende tu Iphone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="md:container md:mx-auto h-screen grid grid-cols-2 gap-2 ">
        <div className="grid grid-rows-2 h-screen text-center ">
          <div className="flex flex-col  align-middle my-auto">
            <h3 className="text-5xl mb-6  text-gray-700 tracking-tight font-semibold ">
              Vender tu Iphone
            </h3>
            <h4 className="text-2xl">Nunca ha sido tan facil</h4>
          </div>
          <div className="object-contain place-items-end	">
            <Image
              alt="Iphones Picture"
              src="/switch_to_iphone.jpg"
              width="500px"
              height="400px"
            ></Image>
          </div>
        </div>

        <div className="flex  container h-screen">
          <div className="flex flex-col  mx-auto my-auto">
            <LoginForm />
            <div className="text-center mt-4">
              <p>
                No tienes cuenta?{" "}
                <span>
                  <a className="text-blue-400 mx-4 cursor-pointer">Registrate</a>
                </span>
              </p>
            </div>

            <div className="mt-4 border-t">
              <LoginExternal />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
