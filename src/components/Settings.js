import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { changeTheme } from "../themeSlice";
import { closeMenu } from "../sidebarslice";

const Settings = () => {
  const dispatch = useDispatch();
  const isdark = useSelector((state) => state.themeSlice.isdark);

  const handletheme = () => {
    dispatch(changeTheme());
  };

  useEffect(()=>{
    dispatch(closeMenu())
  },[])


  return (
    <div>
      <div className="w-screen bg-gray-600 text-white h-16 text-4xl ">
        <p className="ml-3">Settings</p>
      </div>
      <div className="flex p-6 w-screen bg-slate-100">
        <p className="font-bold text-xl">THEME :</p>
        <button className={`ml-7 ${isdark ? "bg-black text-white" : "border border-black"}`} onClick={handletheme}>
  {isdark ? "LIGHT MODE" : "DARK MODE"}
</button>
        <p className="ml-8"> Customize your app theme </p>
      </div>
    </div>
  );
};

export default Settings;
