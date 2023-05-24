import React from 'react'
import ClientLogo from "../../../assets/images/clientLogo.svg";
import TestimonialsImage from "../../../assets/images/Testimonials.svg";

const Testimonial = () => {
  return (
   
    <section className="bg-[#D9D9D9]  ">
  <div className="max-w-[1550px] mx-auto ">
    <div className="  h-[50vh] items-center justify-center flex">
      <img src={TestimonialsImage} className=""/>
    </div>
  </div>

  <div className="bg-white ">
    <div className="max-w-[1550px] mx-auto flex flex-row  items-center">
      <p className="font-strawford font-normal text-2xl px-36 leading-10 py-16">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum
      </p>
    </div>

    <div className="border-t-2">
      <div className="max-w-[1550px] mx-auto flex flex-row items-center">
        <div className="border w-[180px] flex flex-row h-[180px] justify-center  items-center pt-0 mt-0">
          <img src={ClientLogo} />
        </div>
        <div className="flex flex-col pl-16 ">
          <h2 className="text-5xl font-Strawford font-bold leading-[60px] text-[#0C0F24]">
            Name of Client
          </h2>
          <h4 className="text-2xl font-Strawford font-normal leading-10 text-[#0C0F24]">
            Staff Assist UK CEO
          </h4>
        </div>
      </div>
    </div>
  </div>
</section>


  )
}

export default Testimonial