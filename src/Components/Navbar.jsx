import React, { useState, useEffect } from "react";
import Logo from "../img/iticm sidoarjo.png";
import { IoMdMenu, IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#ffffff");
        setTextColor("#000000");
        console.log(changeColor);
      } else {
        setColor("transparent");
        setTextColor("#ffffff");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300 "
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-black ">
        <img className="cursor-pointer  h-[80px]" src={Logo} alt="" />
        <ul
          style={{ color: `${textColor}` }}
          className="hidden sm:flex font-bold text-[18px]"
        >
          <li className="p-4">
            <a href="*">Home</a>
          </li>
          <li className="p-4 ">
            <a href="*">Program</a>
          </li>
          <li className="p-4 ">
            <a href="*">Corporate</a>
          </li>
          <li className="p-4">
            <a href="*">Service</a>
          </li>
          <li className="p-4">
            <a href="*">About</a>
          </li>
        </ul>
        <div className="hidden sm:flex  font-bold cursor-pointer justify-between items-center  ">
          <button className="bg-white text-[#2d4deb] m-4 w-[85px] h-[40px] border-double border-blue-900 ">
            Daftar
          </button>
          <button className=" bg-[#2d4deb] text-white m-4 w-[85px] h-[40px] border-black-300">
            Masuk
          </button>
        </div>
        {/* Mobile Button */}
        <div
          onClick={handleNav}
          className="block sm:hidden z-10 cursor-pointer"
        >
          {!nav ? (
            <IoMdClose size={20} style={{ color: `${textColor}` }} />
          ) : (
            <IoMdMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            !nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-white text-center ease-in duration-300"
              : "sm:block absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-white text-center ease-in duration-300"
          }
        >
          <ul>
            <li className="p-4 text-4xl hover:text-gray-400 ease-in duratio-300">
              <a href="*">Home</a>
            </li>
            <li className="p-4 text-4xl hover:text-gray-400 ease-in duration-300">
              <a href="*">Program</a>
            </li>
            <li className="p-4 text-4xl hover:text-gray-400 ease-in duration-300">
              <a href="*">Corporate</a>
            </li>
            <li className="p-4 text-4xl hover:text-gray-400 ease-in duration-300">
              <a href="*">Service</a>
            </li>
            <li className="p-4 text-4xl hover:text-gray-400 ease-in duration-300">
              <a href="*">About</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
