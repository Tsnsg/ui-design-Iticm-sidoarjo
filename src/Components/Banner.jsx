import React from "react";

const Banner = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-[#0f1820]">
      <div className="max-w-[1240px] mx-auto text-center ">
        <h1 className="text-white text-4xl font-bold mb-5">Galau? Bingung?</h1>
        <p className="text-white text-2xl">
          Obrolin dulu aja dengan Team admission Iticm Sidoarjo!
        </p>
      </div>
      <div className=" flex justify-center items-center mt-[50px]  ">
        <button className="text-white w-[300px]  h-[80px] bg-[#2d4deb]   rounded-lg">
          Klik Untuk Konsultasi Gratis
        </button>
      </div>
    </div>
  );
};

export default Banner;
