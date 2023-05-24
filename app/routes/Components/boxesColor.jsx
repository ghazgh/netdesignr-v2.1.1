import React from 'react'

const BoxesColor = ({colors,width ,boxText ,fontSize ,padding,Cookie_Policy,Privacy_Policy,Terms_Conditions
}) => {

  return (
    <div className='  h-[311px] border border-white border-1 font-medium flex items-center justify-center text-2xl

    text-[#0C0F24]' 
    style={{backgroundColor:colors,width:width ,fontSize:fontSize ,padding:padding}}>{boxText } <br /> {Terms_Conditions}<br /> {Privacy_Policy}
     <br /> {Cookie_Policy}</div>
  )
}

export default BoxesColor