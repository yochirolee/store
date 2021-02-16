import { Fragment } from "react";

export default function LoginExternal() {
  return (
    <div className="flex flex-col justify-between  p-4">
      <button className="bg-blue-900  text-white w-64 rounded-md h-10 mb-4">
        Facebook
      </button>
      <button className="bg-red-600  text-white w-64 rounded-md h-10 mb-4">
        Gmail
      </button>
    </div>
  );
}
