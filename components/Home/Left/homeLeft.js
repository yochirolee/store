import PhoneImage from "./phoneImage"


export default function HomeLeft({selectedModel}) {
  console.log(selectedModel)
  return (
    <div className="text-center aling-middle">
      <h4 className='text-2xl my-4'>{selectedModel.model}</h4>
       <PhoneImage selectedModel={selectedModel}/>
    </div>
  );
}
