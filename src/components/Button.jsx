import React from "react";

const Button = ({ label, iconURL }) => {
  return (
    <>
      <button className="flex gap-2 px-7 py-4 border font-montserrat leading-none bg-coral-red text-lg justify-center items-center text-white rounded-full">
        {label}

        <img
          src={iconURL}
          alt="arrow right icon"
          className="ml-2 rounded-full size-5"
        />
      </button>
    </>
  );
};

export default Button;
