import React from "react";

const Cards = ({ course }) => {
  return (
    <div className=" z-10 bg-white drop-shadow-md  overflow-hidden rounded-2xl mr-2 my-4">
      <img className=" w-full h-40 object-cover" src={course.linkImg} alt="" />
      <div className="p-2  border-b ">
        <p className="text-[16px] text-[#404ee2]">Video Course</p>
        <div className="font-bold text-[18px] mt-4 py-2 truncate">
          <h1>{course.title}</h1>
        </div>
        <div className="flex gap-20 mt-4 text-gray-400 px-[10px]">
          <p>Tanggal</p>
          <p>Waktu</p>
        </div>
        <div className="flex px-[5px] gap-5 font-bold mt-3">
          <p>24 Januari 2024</p>
          <p>19:00-20:00</p>
          <starRating />
        </div>
      </div>
    </div>
  );
};

export default Cards;
