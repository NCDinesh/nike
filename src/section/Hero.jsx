import React from "react";

const Hero = () => {
  return (
    <section
      className="w-full border-2 max-container gap-10 border-red-500 min-h-screen"
      id="Home ">
      <div className="relative xl:w-2/5 flex flex=col justify-center items-start w-full max-xl:padding-x pt-28">
        <p>Our summer Collections</p>
        <h1>
          <span>The New Arrival</span>
          <br />
          <span>Nike</span>
          Shoes
        </h1>
      </div>

      <p>
        Discover stylish Nike arrivals, Quality comfort, and innovation for your
        active life
      </p>
    </section>
  );
};

export default Hero;
