import { Fragment } from "react";
import Head from "next/head";
import NavBar from "../components/NavBar/navBar";
import HomeRight from "../components/Home/Right/homeRight";
import HomeLeft from "../components/Home/Left/homeLeft";
import { SelectedModelProvider } from "../context/selectedModelContext";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Vende tu Iphone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <div className="grid grid-cols-2 place-items-center h-almost w-4/6 mx-auto ">
        <SelectedModelProvider>
          <HomeLeft />
          <HomeRight/>
        </SelectedModelProvider>
      </div>
    </Fragment>
  );
}
