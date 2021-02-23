import React from "react";
import { useForm } from "react-hook-form";

export default function LoginForm({ setAsAccount,asAccount }) {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);


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

        <button
          className="bg-blue-600 hover:bg-blue-700 text-gray-100 h-10 rounded-md"
          type="submit"
        >
          Login
        </button>
      </form>
      <div className="text-center mt-4">
        <p>
          No tienes cuenta?{" "}
          <span>
            <a
              onClick={() => setAsAccount(!asAccount)}
              className="text-blue-400 mx-4 cursor-pointer"
            >
              Registrate
            </a>
          </span>
        </p>
      </div>
    </>
  );
}
