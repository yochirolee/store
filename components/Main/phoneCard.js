import Image from "next/image";

export default function PhoneCard({ phone }) {
  return (
    <div className="flex flex-col  border  rounded-2xl  shadow-xl w-11/12 place-items-center">
      <div className="mt-6">
        <Image
          className="align-middle "
          src={`/iphones/compare_${phone.picture}.jpg`}
          alt="phone"
          height="200px"
          width="150px"
        ></Image>
      </div>
      <div className=" text-center my-2 ">
        <span className="font-bold text-sm inline-flex">{phone.model}</span>
      </div>
      <div className="p-1 text-blue-600 opacity-80 font-bold">
        12250 cup
      </div>
      <div className="flex flex-col  text-right justify-between my-1 leading-tight text-xs">
        <div className="grid grid-cols-2 mt-1  ">
          <div className="mr-2 font-semibold">Estado:</div>
          <div className="text-left ">{phone.condition}</div>
        </div>
        <div className="grid grid-cols-2 mt-1   ">
          <div className="mr-2 font-semibold">SIM:</div>
          <div className="text-left ">{phone.sim}</div>
        </div>
        <div className="grid grid-cols-2 mt-1   ">
          <div className="mr-2 font-semibold">Bateria:</div>
          <div className="text-left ">{phone.battery}%</div>
        </div>
        <div className="grid grid-cols-2 mt-1   ">
          <div className="mr-2 font-semibold">Memoria:</div>
          <div className="text-left ">{phone.storage} GB</div>
        </div>
      </div>
      <div className=' mx-2 mt-4 flex flex-col text-center'>
        <button className='text-xs rounded-2xl p-1 px-2 mb-4 bg-opacity-95 bg-blue-500 text-white'>Ver Mas</button>
      </div>
    </div>
  );
}
