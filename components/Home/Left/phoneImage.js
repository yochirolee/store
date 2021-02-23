import Image from "next/image";

export default function PhoneImage({ selectedModel }) {
  const { data } = selectedModel;
  const item = data.find((item) => item.isActive === true);

  return (
    <Image
      className="align-middle inline-block"
      src={`/iphones/compare_${item.picture}.jpg`}
      alt="phone"
      height={selectedModel.height}
      width={selectedModel.width}
    ></Image>
  );
}
