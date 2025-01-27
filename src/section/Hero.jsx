import React from "react";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";

const Hero = () => {
  return (
    <section
      className="w-full border-2 max-container gap-10 border-red-500 min-h-screen xl:flex-row flex-col justify-center flex"
      id="home ">
      <div className="relative xl:w-2/5 max-xl:padding-x pt-28 flex flex-col justify-center items-start">
        <p className="text-xl font-montserrat text-coral-red">
          Our summer Collections
        </p>
        <h1 className="mt-10 text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-palanquin font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red mt-3 inline-block">Nike</span> Shoes
        </h1>

        <p className="mt-6 mb-14 sm:max-w-sm font-montserrat text-slate-gray leading-8">
          Discover stylish Nike arrivals, Quality comfort, and innovation for
          your active life
        </p>

        <Button label="Shop now" iconURL={arrowRight}></Button>
      </div>
    </section>
  );
};

export default Hero;
