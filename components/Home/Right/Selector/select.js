export default function Select({ iPhoneList, handlePhoneSelect }) {

  return (
    <div>
      <select
        onChange={(e)=>handlePhoneSelect(e)}
        className="w-56 bg-gray-50 h-8 my-4"
        name="select"
      >
        {iPhoneList.map((phone) => (
          <option
            value={phone.id}
            name={phone.model}
            id={phone.id}
            key={phone.id}
          >
            {phone.model}
          </option>
        ))}
      </select>
    </div>
  );
}
