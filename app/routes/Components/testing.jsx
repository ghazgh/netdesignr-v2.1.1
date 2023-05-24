import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import bottomImage from "../../../assets/images/bottomImage.svg";
import smoothTransition from "../../../assets/images/smoothTransition.svg";
import Text_R from "../../../assets/images/text_R.svg";

const MyComponent = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    gsap.registerPlugin(ScrollTrigger);


   
    gsap.set(image, { y: 0 , scale:0.5 ,marginTop: -450 });

   


    gsap.to(image, {
      y: 0,
      duration: 0.5,
      scale:1,
      marginTop: 0,
      scrollTrigger: {
        trigger: section,
        scale: 1,
       
        y: 0,
        start: 'top -25%',
        end: '+=75%',
        scrub: true,
        markers:true
      },
    });
  }, []);


  return (
    <div>
      <section ref={sectionRef}>
      <div className="max-w-[1400px] pt-[85px] px-6  mx-auto bg-[#F4F5FA] min-h-screen">
    <div className="bg-back bg-bottomImage  bg-no-repeat bg-auto bg-bottom h-screen pt-12"  >
      <p className="text-[#C1C6DA]  text-2xl font-medium font-strawford  checking">
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
      <section ref={imageRef}  style={{ height: '100vh', width: '100vw' }}>
        <img src={smoothTransition} alt="تصویر" className=' w-screen ' />
      </section>
    </div>
  );
};

export default MyComponent;
