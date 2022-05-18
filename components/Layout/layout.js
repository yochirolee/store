import NavBar from "../NavBar/navBar";
import { useSession } from "next-auth/client";
import Head from "next/head";

export default function Layout({ children }) {
  const [session] = true;
  return (
    <>
      <Head>
        <title>Vende tu Iphone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {session ? (
        <>
          <NavBar />
          {children}
        </>
      ) : (
        <></>
      )}
    </>
  );
}
