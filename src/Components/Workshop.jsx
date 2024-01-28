import React from "react";
import Cards from "./Cards";
import Slider from "react-slick";
import { courses } from "../Data/Courses";

const Workshop = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  };

  return (
    <div className="w-full bg-[#f7f9fa]">
      <div className="md:max-w-[1480px] m-auto  max-w-[600px]">
        <h1 className="text-4xl py-3 font-bold px-7">Workshop</h1>
        <p className=" px-7 text-2xl ">
          Belajar Dimanapun dan Ikuti dengan Meriah
        </p>
        <Slider {...settings}>
          {courses.map((course) => (
            <Cards course={course} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Workshop;
