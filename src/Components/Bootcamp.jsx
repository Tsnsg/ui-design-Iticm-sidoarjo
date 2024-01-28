import React from "react";
import img1 from "../img/web developer.jpg";
import img2 from "../img/data analyst.jpg";
import img3 from "../img/human resources.jpg";

const Bootcamp = () => {
  return (
    <div className="w-full bg-[#f7f9fa] py-24 ">
      <h1 className="font-bold text-2xl sm:mx-14 text-[40px]">Bootcamp</h1>
      <p className="mb-[20px] text-[24px] sm:mx-14 mt-4">
        Belajar. Dapet kerja. Atau uang kembali up to 110%
      </p>

      <div className="md:max-w-[1480px] m-auto grid md:grid-cols-4 max-w-[600px] gap-10 md:mx-[50px]">
        <div className="bg-white   border-2 drop-shadow-md rounded-lg border-gray-200 overflow-hidden">
          <img
            className="h-40 w-full object-cover"
            src={img1}
            alt="web developer"
          />
          <div className="p-2 text-[16px]">
            <p className="text-[#404ee2]">Bootcamp</p>
          </div>
          <div>
            <h1 className="pl-[8px] font-bold text-[16px] mt-[10px]">
              {" "}
              Web Full Stack Developer
            </h1>
          </div>
          <div className="flex  px-[10px] gap-20 mt-4 text-gray-400">
            <p>Durasi</p>
            <p>Jadwal</p>
          </div>
          <div className="flex px-[10px] gap-8 font-bold">
            <p>19 Minggu</p>
            <p>Februari 2024</p>
          </div>
          <div className="flex px-[10px] gap-20 mt-3 mb-2">
            <p className="w-[40px] text-white rounded-md bg-[#ed1313]">20%</p>
            <p className="text-[#221393] font-bold">Rp 7.000.000</p>
          </div>
        </div>
        <div className="bg-white   border-2 drop-shadow-md rounded-lg border-gray-200 overflow-hidden">
          <img
            className="h-40 w-full object-cover"
            src={img3}
            alt="web developer"
          />
          <div className="p-2 text-[16px]">
            <p className="text-[#404ee2]">Bootcamp</p>
          </div>
          <div>
            <h1 className="pl-[8px] font-bold text-[16px] mt-[10px]">
              {" "}
              Human Resources
            </h1>
          </div>
          <div className="flex  px-[10px] gap-20 mt-4 text-gray-400">
            <p>Durasi</p>
            <p>Jadwal</p>
          </div>
          <div className="flex px-[10px] gap-8 font-bold">
            <p>19 Minggu</p>
            <p>Februari 2024</p>
          </div>
          <div className="flex px-[10px] gap-20 mt-3 mb-2">
            <p className="text-white rounded-md w-[40px] bg-[#ed1313]">20%</p>
            <p className="font-bold text-[#404ee2]">Rp 7.000.000</p>
          </div>
        </div>
        <div className="bg-white   border-2 drop-shadow-md rounded-lg border-gray-200 overflow-hidden">
          <img
            className="h-40 w-full object-cover"
            src={img2}
            alt="web developer"
          />
          <div className="p-2 text-[16px]">
            <p className="text-[#404ee2]">Bootcamp</p>
          </div>
          <div>
            <h1 className="pl-[8px] font-bold text-[16px] mt-[10px]">
              {" "}
              Big 4 Auditor & Data Analyst
            </h1>
          </div>
          <div className="flex  px-[10px] gap-20 mt-4 text-gray-400">
            <p>Durasi</p>
            <p>Jadwal</p>
          </div>
          <div className="flex px-[10px] gap-8 font-bold">
            <p>19 Minggu</p>
            <p>Februari 2024</p>
          </div>
          <div className="flex px-[10px] gap-20 mt-3 mb-2">
            <p className="rounded-md w-[40px] text-white bg-[#ed1313]">20%</p>
            <p className="font-bold text-[#404ee2]">Rp 7.000.000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bootcamp;
