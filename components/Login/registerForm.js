import React from "react";
import { useForm } from "react-hook-form";

export default function RegisterForm({ asAccount, setAsAccount }) {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <>
      <form
        className="flex flex-col  mx-auto my-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="border-gray-400 pl-2 border w-64 rounded-md h-10 mb-4"
          type="text"
          placeholder="Email"
          name="Email"
          ref={register({ required: true, maxLength: 80 })}
        />
        <input
          className="border-gray-400 pl-2 border rounded-md h-10 mb-3"
          type="text"
          placeholder="Password"
          name="Password"
          ref={register({ required: true, maxLength: 100 })}
        />

        <input
          className="border-gray-400 pl-2 border rounded-md h-10 mb-3"
          type="text"
          placeholder="Re-Password"
          name="RePassword"
          ref={register({ required: true, maxLength: 100 })}
        />

        <button
          className="bg-purple-800 hover:bg-purple-700 text-gray-100 h-10 rounded-md"
          type="submit"
        >
          Registrate
        </button>
      </form>
      <div className="text-center mt-4">
        <p>
          Ya posees una cuenta?
          <span>
            <a
              onClick={() => setAsAccount(!asAccount)}
              className="text-blue-400 mx-4 cursor-pointer"
            >
              Entra Aqui
            </a>
          </span>
        </p>
      </div>
    </>
  );
}
