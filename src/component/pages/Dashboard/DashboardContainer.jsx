/* eslint-disable no-unused-vars */
import { Outlet } from "react-router-dom";
import RightNav from "./RightNav";
import { useState } from "react";
import TopNav from "./TopNav";

export default function Container() {
    
  return (
    <>
   <div className="flex flex-col h-screen w-full">
    <TopNav/>
    <div className="flex h-screen w-full">  
      <div className="w-1/10">
        <RightNav />
      </div>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
    </div>
    </>
  )
}
