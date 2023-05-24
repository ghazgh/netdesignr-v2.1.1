
import React, { useRef, useEffect } from 'react';


import Header from "./Components/header";
import Services from "./Components/services";
import Projects from "./Components/projects";
import ContactUs from "./Components/contactUs";
import Footer from "./Components/footer";
import Hero from "./Components/Hero";
import SmoothTransition from "./Components/SmoothTransition";

import TextTransitions from "./Components/TextTransition";
import Testimonial from "./Components/Testimonial";
import MyComponent from './Components/testing';
// import Join from "./1join";






export const meta = () => [{ title: "Net Design" }];

export default function Index() {
 

  return (
    <main className="relative min-h-screen bg-[#F4F5FA] ">
        <MyComponent/>
      {/* <Header />
      <Hero/>
      <SmoothTransition/>

      <TextTransitions/>
   

      
      <Services
        backgroundColor="#ffffff"
        text="Web"
        boldText="design & development"
        describeText="Hire us as your UX/UI company for creating smooth, feature-rich, sleek yet stylish website for maximum conversions"
      />
      <Projects/>
      <Testimonial/>

      <ContactUs/>
      <Footer/>  */}

    </main>
  );
}
