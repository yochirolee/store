import Storage from "./storage";

export default function Storages({ selectedModel,handleStorageChange }) {
  return (
    <div className="flex flex-row justify-around flex-nowrap">
      {selectedModel.storage.map((item) => (
        <Storage item={item} handleStorageChange={handleStorageChange} key={item.id}/>
      ))}
    </div>
  );
}
