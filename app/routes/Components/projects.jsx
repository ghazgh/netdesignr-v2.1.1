import React from 'react'
import Project_Img from "../../../assets/images/card1.png";
import Project_Img_1 from "../../../assets/images/card1.png";

const Projects = () => {
  return (
    <> <section className="mx-auto bg-[#182350] min-h-screen overflow-x-hidden	 relative ">
    <div className="p-0 font-strawford absolute  min-h-screen font-black text-[500px] leading-normal hanging-punctuation font-pnum font-lnum font-ss01 ">
      <h3 className="  min-h-screen text-[#141E44] text-c">Projects</h3>
    </div>
    <div className="max-w-[1400px]  mx-auto relative  min-h-screen">
      <div className="w-[575px] h-[490px] bg-white absolute">
        <img src={Project_Img} className="h-[490px] w-[575px]" />
        <div className="flex flex-row justify-between pt-10">
          <h2 className=" text-white font-strawford font-normal text-2xl">
            Tundra E-Sports
          </h2>
          <h2 className=" text-white font-strawford font-normal text-2xl">
            2023
          </h2>
        </div>
      </div>

      <div className="w-[575px] h-[490px] bg-white absolute left-auto right-0 top-auto bottom-0">
        <img src={Project_Img_1} className="h-[490px] w-[575px]" />
      </div>
    </div>
  </section>
</>
  )
}

export default Projects