import React from 'react'
import ServiceImg from "../../../assets/images/serviceImg.png";

const Services = ({backgroundColor,text,boldText,describeText,servicedisplay}) => {

    if(servicedisplay === 'no'){
        servicedisplay ='none';
    }
    
    const gradientColor = 'background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(24,35,80,1) 0%, rgba(24,35,80,1) 46%, rgba(255,255,255,1) 46%, rgba(255,255,255,1) 100%)';
  return (
    <section className="mx-auto bg-[#182350] min-h-screen 	 relative gradientColor" style={{gradientColor}}>
    <div className="absolute rotate-[-90deg] top-0 bottom-0  leading-[200px]">
      <h2 className="font-bold text-[#141e44]  text-[250px]">Services</h2>
    </div> 

    <div className="max-w-[1400px] mr-auto ml-auto  min-h-screen" style={{backgroundColor:backgroundColor}}>
      <div className="max-w-7xl min-h-screen mx-auto">
        <div className="flex flex-row w-full justify-center items-center">
            <div className="w-1/2 min-h-screen  flex flex-col   justify-center">
                <h2 className="font-normal text-7xl text-[#0C0F24] leading-[100px]">{text} <span className="font-bold">{boldText} </span> </h2>

                <p className="text-2xl text-[#0C0F24] font-normal pt-8">
               {describeText}
                </p>
                <div className="flex flex-wrap pt-10" style={{display : servicedisplay}}>
                <h3 className="border border-[#0C0F24] text-2xl text-[#0C0F24] px-3 py-2 mr-2">UX Analylics</h3>
                <h3 className="border border-[#0C0F24] text-2xl text-[#0C0F24] px-3 py-2 mr-2">Wireframes</h3>
                <h3 className="border border-[#0C0F24] text-2xl text-[#0C0F24] px-3 py-2 mr-2">UI Design</h3>
                <h3 className="border border-[#0C0F24] text-2xl text-[#0C0F24] px-3 py-2 mr-2">Front-End</h3>
                <h3 className="border border-[#0C0F24] text-2xl text-[#0C0F24] px-3 py-2 mr-2 mt-4">Back-End</h3>
                <h3 className="border border-[#0C0F24] text-2xl text-[#0C0F24] px-3 py-2 mr-2  mt-4">Testing</h3>
              </div>
            </div>
            <div className="w-1/2 min-h-screen 00 flex flex-col  items-center justify-center ">
              <img src={ServiceImg} className=" w-9/12"/>

             

            </div>
        </div>
      </div>

    </div>
      
    </section>
  )
}

export default Services