import React from 'react'
import videobg from '../assets/girlypopbg.mp4'

function ActiveScreen({ closePlayer} ) {
  return (
    <div className='videobg'>
      <video src={videobg} autoPlay loop muted/>
      <button onClick={() => closePlayer(false)}>Daddy, chill</button>
    </div>
  )
}

export default ActiveScreen