import logo from "./logo.svg";
import "./App.css";
import Project_Img from "./assets/images/card1.png";
import Project_Img_1 from "./assets/images/card2.png";
import Footerlogo from "./assets/images/logo.png";
import Arrow from "./assets/images/Union.png";

import BoxesColor from "./components/boxesColor";
import Services from "./components/services";
const Terms_Conditions = "";

function App() {
  return (
    <>
      <Services
        backgroundColor="#ffffff"
        text="Web"
        boldText="design & development"
        describeText="Hire us as your UX/UI company for creating smooth, feature-rich, sleek yet stylish website for maximum conversions"
      />
      
    {/* PLEASE DON'T DELETE COMMENTS SECTION THIS IS CODE */}

      {/* <Services
        backgroundColor="#AFC4F9"
        text="Apps"
        boldText="design & development"
        describeText="App development for Google Android and Apple iOS. We bring your app idea to life that will have users keep coming for more"
      />
      <Services
        backgroundColor="#E9EBF5"
        text="Brand & identity"
        boldText=" design"
        describeText="We are here to help tell the personal and unique story of your brand while providing a rich User Experience. This contributes to extending your brand virtually to speak what business stands for"
      />
      <Services
        backgroundColor="#C1C6DA"
        text="Optimisation "
        boldText=" & Maintenance"
        describeText="All websites need maintaining post-launch and we have a proactive service that enables you to get the best from your website"
        servicedisplay="none"
      /> */}
      <section className="mx-auto bg-[#182350] min-h-screen overflow-x-hidden	 relative ">
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

      <section className="bg-[#182350] min-h-screen overflow-x-hidden	">
        <div className="max-w-[1400px]  bg-[#182350]  items-center flex  relative  min-h-screen">
          <div>
            <h2 className=" font-strawford text-white  font-bold text-[160px] leading-[160px]">
              Let's
            </h2>
            <h2 className=" font-strawford text-white  font-normal text-[160px]  leading-[160px]">
              discuss
            </h2>

            <h2 className=" font-strawford text-white  font-bold text-[160px] leading-[160px] ">
              your
            </h2>

            <h2 className=" font-strawford text-white  font-bold text-[160px] leading-[160px]">
              project
            </h2>
          </div>
          <div className=" flex flex-col w-5/12 ml-auto">
            <input
              type="text"
              placeholder="Your Name"
              required
              className="my-3 text-[#C1C6DA] outline-0 bg-transparent border h-[70px] pl-8 text-xl"
            />
            <input
              type="text"
              placeholder="Email"
              required
              className="my-3 text-[#C1C6DA] outline-0 bg-transparent border h-[70px] pl-8 text-xl"
            />
            <textarea
              placeholder="Email"
              maxlength="150"
              className="my-3 pt-4 h-40 text-[#C1C6DA] outline-0 bg-transparent border h-[70px] pl-8 text-xl"
            />

            <div>
              <input
                type="checkbox"
                value="Yes"
                className="my-3 mr-auto text-[#C1C6DA] outline-0 bg-transparent border  pl-8 text-xl"
              />
              <label
                for="scales"
                className=" pl-4 font-normal pt-4 h-40 text-[#FFFFFF] text-xl"
              >
                I agree to the Privacy Policy
              </label>
            </div>

            <input
              type="submit"
              className="mt-20 ml-auto bg-[#EB5B4F] w-[174px] h-[70px] text-center text-xl text-white font-medium"
            />
          </div>
        </div>
      </section>

      <div className="flex flex-row bg-black">
        <div className="flex flex-row bg-slate-300 w-[50%] relative items-center">
          <BoxesColor colors="#EB5B4F" width="100%" />
          <img
            src={Footerlogo}
            className="absolute top-auto mx-auto my-auto   "
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
      <section></section>
    </>
  );
}

export default App;
