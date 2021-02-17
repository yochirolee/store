import React, { useEffect, useState } from "react";
import Image from "next/image";
export default function Battery() {
  const [battery, setBattery] = useState(100);
  const [batteryIcon, setBatteryIcon] = useState("/battery/bat100.svg");

  useEffect(() => {
    const getBatteryIcon = () => {
      if (90 < battery < 100) {
        setBatteryIcon("/battery/bat100.svg");
      }
      if (battery < 89) {
        setBatteryIcon("/battery/bat80.svg");
      }
      if (battery < 60) {
        setBatteryIcon("/battery/bat50.svg");
      }
    };
    getBatteryIcon();
  }, [battery, batteryIcon]);

  const handleBatteryValue = (e) => {
    setBattery(e.target.value);
  };
  return (
    <div className="flex flex-row my-8 justify-around place-items-center h-2 text-center mx-auto">
      <input
        onChange={handleBatteryValue}
        className="w-40 h-1 "
        id="battery-slider"
        name="battery"
        type="range"
        min="40"
        max="100"
        defaultValue={battery}
        step="1"
      />
      <div className="ml-4 flex place-items-center  ">
        <Image
          src={batteryIcon}
          alt="battery"
          height="18px"
          width="18px"
        ></Image>
        <span>{battery}%</span>
      </div>
    </div>
  );
}
