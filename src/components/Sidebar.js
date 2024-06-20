import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useContext } from "react";
import APIcontext from "../APIcontext";

const Sidebar = () => {
  const APIdata =useContext(APIcontext);

  const sidebar = useSelector((state) => state.sidebar.sidebar);
  if (!sidebar) return null;
   return (
    <div className=" flex shadow-lg w-full h-16 rounded-lg  ">
      
      <ul className="flex flex-row justify-between  ml-52">
        <li className=" m-2 p-2 font-bold  text-base flex hover:bg-slate-200 cursor-pointer">
          <img
            alt="HOME"
            className="h-5 w-8"
            src="https://static.vecteezy.com/system/resources/thumbnails/014/391/893/small/home-icon-isolated-on-transparent-background-black-symbol-for-your-design-free-png.png"
          />
          HOME 
        </li>
        <li className=" m-2 p-2  text-base flex  hover:bg-slate-200 cursor-pointer">
          <img
            alt="TRENDING"
            className="h-6 w-8"
            // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb3f6K_pfepbyOu8Ninly_9Q-h0J_NunhZyg&usqp=CAU"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuZwyJHn8s19mhozM5rQhMHqpnxYeRnU2ROA&usqp=CAU"
          />
          TRENDING
        </li>
        <li className=" m-2 p-2  text-base flex  hover:bg-slate-200 cursor-pointer">
          <img
            alt="LIVE"
            className="h-5 w-8"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO3YQA4LZ-enk7pxWMkOVU6AHddMzMPQ58dpFHwwMpYFzRRaoq-VNTAbCpjhBQbUjtfU0&usqp=CAU"
          />
          LIVE
        </li>
        <hr />
        <li className=" m-2 p-2   text-base flex hover:bg-slate-200 cursor-pointer">
          <img
            alt="SUBSCIPTION"
            className="h-5 w-8"
            src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3264375/subscriptions-icon-md.png"
          />
          SUBSCRIPTIONS
        </li>
        <li className=" m-2 p-2  text-base flex hover:bg-slate-200 cursor-pointer">
          <img
            alt="BOOKMARKS"
            className="h-6 w-6"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe2Mk2yOfFPhSDTCknHQMtCl40ZhCh8T64Gw&usqp=CAU"
          />
          BOOKMARKS
        </li>
        <li className=" m-2 p-2   text-base ml-3 flex hover:bg-slate-200 cursor-pointer">
          <img
            alt="HISTORY"
            className="h-6 w-6"
            src="https://static-00.iconduck.com/assets.00/clock-icon-2048x2048-o0dud9zx.png"
          />
          HISTORY
        </li>
        <li className=" m-2 p-2   text-base flex ml-3  hover:bg-slate-200 cursor-pointer">
         <img
            alt="SETTINGS"
            className="h-6 w-7"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvJG7_0JDtpfVT9pkz7aUg94T3UZgqFEATEmUFidwBow&s"
          />
          SETTINGS {APIdata.Channelname}
         
        </li>
      </ul>
      {/* <p>me</p>
      <p>me</p>
      <p>me</p> */}
    </div>
  );
};

export default Sidebar;
