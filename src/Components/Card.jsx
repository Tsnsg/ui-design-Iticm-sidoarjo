import React from "react";
import Logo1 from "../img/learning_4185218.png";
import Logo2 from "../img/money-bag_2953363.png";
import Logo3 from "../img/freelance_3150573.png";
import Logo4 from "../img/best-price_2854306.png";

const Card = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white ">
      <h1 className="  mx-auto text-center font-bold text-[30px] mb-[100px] ">
        Alasan 4373 Alumni Memilih Iticm Sidoarjo
      </h1>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-4 gap-8">
        <div className="w-full cursor-pointer  shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Logo1}
            alt=""
          />
          <h2 className="text-2xl font-bold text-center py-8 ">From 0-1</h2>
          <p className="text-center text-1xl  font-medium ">
            Alumni sudah bekerja. Tanpa pilah-pilih, dengan kurikulum
            harisenin.com kamu bisa #JadiYangKamuMau.
          </p>
        </div>
        <div className=" cursor-pointer w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Logo2}
            alt=""
          />
          <h2 className="text-2xl font-bold text-center py-8 ">Refund 100%</h2>
          <p className="text-center text-1xl  font-medium">
            Satu-satunya di Indonesia. Uangmu kembali 100%, plus 10% kalau kamu
            nganggur setahun setelah lulus.
          </p>
        </div>
        <div className="w-full cursor-pointer  shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Logo3}
            alt=""
          />
          <h2 className="text-2xl font-bold text-center py-8 ">99.8%</h2>
          <p className="text-center text-1xl  font-medium ">
            Alumni sudah bekerja. Tanpa pilah-pilih, dengan kurikulum
            harisenin.com kamu bisa #JadiYangKamuMau.
          </p>
        </div>
        <div className="w-full  cursor-pointer shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Logo4}
            alt=""
          />
          <h2 className="text-2xl font-bold text-center py-8 ">
            Price Vs Value
          </h2>
          <p className="text-center text-1xl  font-medium ">
            Yes. Alumni kami sadar bahwa value yang didapat vs harga yang mereka
            bayar melebihi ekspektasi mereka.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
