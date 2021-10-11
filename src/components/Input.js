import React from "react";

const Input = ({ type = "text", placeholder, value, name, register, errors, required, className }) => {
  return (
    <div>
      <input
        className={`outline-none p-2 text-center bg-gray-200 rounded-md w-full ${errors?.[name] ? "border-red-400 border-2" : ""} ${className}`}
        type={type}
        value={value}
        placeholder={placeholder}
        noValidate
        {...register(name, {
          required
        })}
      />
    </div>
  );
};

export default Input;
