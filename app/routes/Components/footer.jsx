import React from 'react'
import Arrow from "../../../assets/images/Union.png";
import BoxesColor from './boxesColor';
import Footerlogo from '../../../assets/images/logo.svg';

const Footer = () => {
  return (
    <>
    <footer>
    <div className="flex flex-row bg-black">
        <div className="flex flex-row bg-slate-300 w-[50%] relative items-center">
          <BoxesColor colors="#EB5B4F" width="100%" />
          <img
            src={Footerlogo}
            className="absolute top-auto mx-auto my-auto  w-full   pl-4"
          />
          <BoxesColor colors="#EB5B4F" width="100%" />
        </div>
        <div className="flex flex-row w-full bg-orange-600">
          <BoxesColor colors="#f4f5fa" width="25%" boxText="About Us" />
          <BoxesColor colors="#f4f5fa" width="25%" boxText="Projects" />
          <BoxesColor colors="#f4f5fa" width="25%" boxText="Services" />
          <BoxesColor colors="#f4f5fa" width="25%" boxText="Contact" />
        </div>
      </div>

      <div className="flex flex-row ">
        <BoxesColor
          colors="#EB5B4F"
          width="16.66%"
          fontSize="20px"
          padding="0px 55px "
          boxText="Netdesignr Ltd, Chessington Business Centre, Cox Lane, Chessington, England, KT9 1SD"
        />
        <div className="flex flex-row  w-[50%] relative items-center justify-center ">
          <h2 className="absolute text-7xl text-center font-bold mx-auto">
            hello@netdesignr.com
          </h2>

          <BoxesColor colors="#e9ebf5" width="33.5%" boxText="" />
          <BoxesColor colors="#e9ebf5" width="33.5%" boxText="" />
          <BoxesColor colors="#e9ebf5" width="33.5%" boxText="" />
        </div>
        <div className="relative w-[16.65%] bg-black flex items-center justify-center">
          <img src={Arrow} className="absolute  " />
          <BoxesColor colors="#e9ebf5" width="100%" boxText="" />
        </div>
        <BoxesColor colors="#c1c6da" width="16.66%" boxText="" />
      </div>
      <div className="flex flex-row ">
        <BoxesColor
          colors="#eb5b4f"
          width="16.66%"
          fontSize="14px"
          padding="0px 45px "
          boxText="© 2016 - 2023 Netdesignr Ltd. All rights reserved. Company no. 10018549"
        />

        <BoxesColor colors="#afc4f9" width="16.66%" boxText="Fb" />
        <BoxesColor colors="#afc4f9" width="16.66%" boxText="Be" />
        <BoxesColor colors="#afc4f9" width="16.66%" boxText="Li" />
        <BoxesColor colors="#c1c6da" width="16.66%" boxText="" />
        <BoxesColor
          fontSize="20px"
          colors="#c1c6da"
          width="16.66%"
          Privacy_Policy="Privacy policy "
          Cookie_Policy="Cookie policy"
          Terms_Conditions='Terms & conditions'
          
        />
      </div>



    </footer>
    
    </>
  )
}

export default Footer