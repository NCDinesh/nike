import React from "react";
import { statistics } from "../constants";

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

      <div className="flex mt-20 gap-16 justify-start items-start w-full flex-wrap">
        {statistics.map((stat) => (
          <div key={stat.label}>
            <p>{stat.value}</p>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Button;
