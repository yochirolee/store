import PhoneCard from "./phoneCard";
import { PublishedPhones } from "../../assets/publishPhonesList";

export default function MainContainer() {
  return (
    <div className="grid grid-cols-4  ">
      <div className=" col-span-1">kkkkkkk</div>

      <div className="grid grid-cols-4 mt-6 gap-4 col-span-3 place-items-center   ">
        {PublishedPhones.map((phone) => (
          <PhoneCard phone={phone} key={phone.id} />
        ))}
      </div>
    </div>
  );
}
