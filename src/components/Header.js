import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { hideSidebar } from "../sidebarslice";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const sidebar = useSelector((state) => state.sidebar.sidebar);

  const handleSidebar = () => {
    dispatch(hideSidebar());
  };
  return (
    <div className="flex bg-slate-100">
      <img
        alt="hamburger"
        onClick={() => handleSidebar()}
        className="h-5 w-5 mt-9 ml-5 hover:cursor-pointer"
        src={
          sidebar
            ? "https://cdn-icons-png.flaticon.com/512/60/60781.png"
            : "https://www.pngfind.com/pngs/m/25-259084_up-arrow-collapse-icon-svg-hd-png-download.png"
        }
      />
        <img
        alt="hamburger"
        className="h-8 w-9 ml-16 mt-4 "
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx8ZR4WRoLv3slzva_0puoRHHCjZ73hEUkr4XdCC1J9A&s"
      />
        <p className="mr-20 mt-3 font-bold text-3xl ml-1 text-yellow-950 ">
          TUBE
        </p>
    
      <input
        type="text"
        className="border border-black ml-36 w-1/3 h-10 my-3 rounded-l-md"
        placeholder="SEARCH"
      />
      <button className="border border-black h-10 my-3 rounded-r-md w-20">
        Search
      </button>
      <button className="border border-black h-10 ml-28 rounded-md w-20 my-3">
        SIGN{" "}
      </button>
      <img
        alt="hamburger"
        className="h-11 w-12 ml-24 my-1"
        src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
      />
    </div>
  );
};

export default Header;
