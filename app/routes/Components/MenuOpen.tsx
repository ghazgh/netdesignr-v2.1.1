import React from 'react';
import CloseMenu from '../../../assets/images/App';
import Puzzle from "../../../assets/images/puzzle.svg";
import Fb from "../../../assets/images/Fb.svg";

const MenuOpen = () => {
  return (
    <div className="min-h-screen bg-[#182350]">
    <img src={CloseMenu} className="flex justify-end items-end ml-auto pr-4 pt-5"/>
    <div>
      <div className="flex justify-start items-center text-[160px] leading-[160px] font-strawford font-bold mt-3">
        <h2 className="pr-8 text-white">About Us</h2>
        <img src={Puzzle} className="w-[79px] h-[120px]"/>
      </div>
      <div className="flex justify-start items-center text-[160px] leading-[160px] font-strawford font-light mt-3">
        <h2 className="pr-8 text-white">Services</h2>
        {/* <img src={Puzzle} className="w-[79px] h-[120px]"/> */}
      </div>
      <div className="flex justify-start items-center text-[160px] leading-[160px] font-strawford font-light mt-3">
        <h2 className="pr-8 text-white">Projects</h2>
        {/* <img src={Puzzle} className="w-[79px] h-[120px]"/> */}
      </div>
      <div className="flex justify-start items-center text-[160px] leading-[160px] font-strawford font-light mt-3">
        <h2 className="pr-8 text-white">Contact</h2>
        {/* <img src={Puzzle} className="w-[79px] h-[120px]"/> */}
      </div>
    </div>

   
      <a href="mailto:hello@netdesignr.com"  className="flex justify-end items-end font-bold text-white text-7xl ml-auto pr-4 pt-5">
      hello@netdesignr.com
        </a>
        <div className="flex justify-end items-end mt-9">
          <a href="" className="w-[38px] h-[38px]" > <img src={Fb}/></a>
          <a href="" className="w-[38px] h-[38px] mx-16" > <img src={Fb}/></a>
          <a href="" className="w-[38px] h-[38px] mr-4" > <img src={Fb}/></a>

    </div>
    </div>
  )
}

export default MenuOpen