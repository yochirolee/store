export default function Price() {
  return (
    <div className='relative'>
      <figure className='absolute top-5 left-14 text-green-500 bolder'>$</figure>
      <input
        className=" w-56 bg-gray-50 h-8 my-4 pl-8"
        placeholder="Precio de Venta"
        
      ></input>
      <select className='absolute bg-gray-50 top-5 right-12'>
          <option>USD</option>
          <option>MN</option>
      </select>
    </div>
  );
}
