import Image from "next/image";
import { useEffect, useState } from "react";

export default function PhoneImage({ selectedModel }) {
  const { data } = selectedModel;

  const defaultImage = "/iphones/compare_iphone12_black.jpg";

  const item = data.find((item) => item.isActive === true);

  console.log(item);

  return (
    <Image
      className="align-middle inline-block"
      src={item ? `/iphones/compare_${item.picture}.jpg` : defaultImage}
      alt="exit"
      height={selectedModel.height}
      width={selectedModel.width}
    ></Image>
  );
}
