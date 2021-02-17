import { Fragment } from "react";
import React, { useState } from "react";
import Head from "next/head";
import NavBar from "../components/NavBar/navBar";
import HomeRight from "../components/Home/Right/homeRight";
import HomeLeft from "../components/Home/Left/homeLeft";
import { iPhoneList } from "../assets/iphonesList";
export default function Home() {
  const [selectedModel, setSelectedModel] = useState(iPhoneList[0]);

  const [colorId, setColorId] = useState(1);

  const handleColorChange = (id) => {
    selectedModel.data.map((item) => {
      if (item.id === id) {
        item.isActive = true;
      } else {
        item.isActive = false;
      }
    });
    setColorId(id);
  };

  const handlePhoneSelect = async (e) => {
    const id = e.target.value;
    const selected = await iPhoneList.find(
      (phone) => phone.id === parseInt(id)
    );
    setSelectedModel(selected);
  };

  return (
    <Fragment>
      <Head>
        <title>Vende tu Iphone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <div className="grid grid-cols-2 place-items-center h-almost w-4/6 mx-auto ">
        <HomeLeft selectedModel={selectedModel}  />
        <HomeRight
          iPhoneList={iPhoneList}
          selectedModel={selectedModel}
          handlePhoneSelect={handlePhoneSelect}
          handleColorChange={handleColorChange}
        />
      </div>
    </Fragment>
  );
}
