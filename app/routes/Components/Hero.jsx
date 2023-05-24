import React from 'react'
import logo from "../../../assets/images/logo.svg";
import Text_R from "../../../assets/images/text_R.svg";

import bottomImage from "../../../assets/images/bottomImage.svg";


var bottomImageBackground = {

    backgroundImage: `url(${bottomImage})`
  };
  

const Hero = () => {
  return (
    <section>
    <div className="max-w-[1400px] pt-[85px] px-6  mx-auto bg-[#F4F5FA] min-h-screen">
    <div className="bg-back bg-bottomImage  bg-no-repeat bg-auto bg-bottom h-screen pt-12" style={bottomImageBackground} >
      <p className="text-[#C1C6DA]  text-2xl font-medium font-strawford ">
       Welcome to NetDesignr <br />
        Creative Agency
      </p>

      <div>
        <p className="font-light text-black text-[130px] font-strawford text leading-[160px] text-right">
        
          <span className="font-bold"> We are </span> the missing
        </p>

        <p className="font-light text-black text-[130px] font-strawford text leading-[160px] flex items-center ">
          part
          <span className="font-bold"> &nbsp;of your p </span>
          <img src={Text_R} alt="text-logo-r" className="pl-1 pr-1 mt-12  w-[50px] " />
          <span className="font-extrabold">oject </span>
        </p>
      </div>
    </div>
  </div>
  </section>
  )
}

export default Hero