import React from 'react'
import TextTransition, { presets } from "react-text-transition";
import SmoothTransition from "../../../assets/images/smoothTransition.svg";
import squareBg from "../../../assets/images/squareBg.svg";




var squarebackGround = {

    backgroundImage: `url(${squareBg})`
  };


  const TEXTS = [
    "Believe",
    "Care",
    "Talk",
    "Love",
    "Know",
    "Solve",
    "Understand",
  ];
  

const TextTransitions = () => {
    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
      const intervalId = setInterval(
        () => setIndex((index) => index + 1),
        2000 // every 3 seconds
      );
      return () => clearTimeout(intervalId);
    }, []);
  return (
    <section className="bg-back bg-squareBg  bg-no-repeat bg-auto bg-center h-screen" style={squarebackGround}>
    <div className="max-w-6xl mx-auto  h-full ">
      <div
        className="flex
       pl-[50px] pt-[175px]"
      >
        <h3
          className=" font-normal text-[140px] leading-tight   
        justify-center hanging-punctuation-[first last] font-ss01 font-salt text-white pr-8"
        >
          We
        </h3>
        <div className="relative overflow-hidden">
          <TextTransition
            springConfig={presets.slow}
            className="text-[140px] leading-tight  font-extrabold font-ss01 font-salt text-white"
          >
            {TEXTS[index % TEXTS.length]}
          </TextTransition>
        </div>
      </div>
      <div>
        <p className="text-3xl font-normal w-1/2 ml-auto pt-10 text-white ">
          that everyone should benefit from <br /> having an excellent
          online reputation <br /> by owning a usable and accessible web
          <br /> or mobile application, no matter the <br /> company size
        </p>
      </div>
    </div>
  </section>

  )
}

export default TextTransitions