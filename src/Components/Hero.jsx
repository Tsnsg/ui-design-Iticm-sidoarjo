import React from "react";
import Typed from "react-typed";
import Logoku from "../../src/img/lampu.jpg";
import { Fragment } from "react";

const Hero = () => {
  return (
    <div className="text-white  h-screen   ">
      <>
        <img className="w-full bg-cover h-[700px]   " src={Logoku} alt="" />
        <div className=" absolute  mt-[-650px] w-full h-screen  mx-auto text-center flex flex-col-reverse justify-center">
          <button className="  bg-[#221393] w-[200px] rounded-md font-medium my-6 mx-auto py-3  text-white">
            Get Started
          </button>

          <div className="  flex justify-center items-center">
            <p className=" md:text-5xl sm:text-4xl font-bold">
              Fast, Flexible for Your
            </p>
            <Typed
              className="md:text-5xl sm:text-4xl font-bold pl-2"
              strings={["Career", "Education", "Activity"]}
              typeSpeed={200}
              backSpeed={140}
              loop
            />
          </div>
          <h1 className=" capitalize  md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
            Grow with your action
          </h1>
          <p className="  mx-9 text-[#000300] font-bold p-2 text-white">
            GROWING WITH YOUR EDUCATION
          </p>
        </div>
      </>
    </div>
  );
};

export default Hero;
