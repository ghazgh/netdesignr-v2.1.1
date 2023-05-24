import React from 'react'
import loadingVideo from '../../assets/loadingScreen/loading.mp4'

const LoadingScreen = () => {
console.log('Loading');
  return (
    <div>loadingScreen

        <video >
      <source src={loadingVideo} type="video/mp4"/>
     </video>
    </div>
  )
}

export default LoadingScreen;