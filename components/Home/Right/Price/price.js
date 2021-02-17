export default function Price() {
  return (
    <div className="relative">
      <figure className="absolute top-5 left-6 text-green-400 bolder">$</figure>
      <input
        className=" w-56 bg-gray-50 h-8 my-4 pl-8"
        placeholder="Precio de Venta"
      ></input>
      <select className="absolute bg-gray-50 top-5 right-4">
        <option>MN</option> 
        <option>USD</option>
        <option>EUR</option>
      </select>
    </div>
  );
}
