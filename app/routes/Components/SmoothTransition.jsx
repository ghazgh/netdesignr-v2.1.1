import React from 'react'
import smoothTransition from "../../../assets/images/smoothTransition.svg";


var smoothTransitions = {

    backgroundImage: `url(${smoothTransition})`
  };
  
  
const SmoothTransition = () => {



  return (
  <>
   
   <section>
    <div className="bg-back  bg-no-repeat bg-auto bg-center h-screen" style={smoothTransitions}>
  
    </div>
  </section>
  </>
  )
}

export default SmoothTransition