import React from "react";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";

const Hero = () => {
  return (
    <section
      className="w-full  max-container gap-10 min-h-screen xl:flex-row flex-col justify-center flex"
      id="home ">
      <div className="relative xl:w-2/5 max-xl:padding-x pt-28 flex flex-col justify-center items-start">
        <p className="text-xl font-montserrat text-coral-red">
          Our summer Collections
        </p>
        <h1 className="mt-10 text-[60px] max-sm:text-[72px] max-sm:leading-[82px] font-palanquin font-bold">
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

        <div className="flex mt-20 gap-16 justify-start items-start w-full flex-wrap">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-bold font-palanquin">{stat.value}</p>
              <p className="text-slate-gray font-montserrat leading-7">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center flex-1 xl:min-h-screen max-xl:pb-40 max-xl:pt-20 bg-primary bg-hero bg-cover bg-center relative   ">
        <img
          src={bigShoe1}
          alt="bigshoe1"
          width={550}
          className="object-contain relative z-10 lg:mb-20"
        />

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[0%] sm:left-[15%] max-sm:px-6  mt-20">
          {shoes.map((shoe) => (
            <div key={shoe}>
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImage={() => {}}
                bigShoeImg=""
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
