import React from 'react'
import videobg from '../assets/girlypopbglow.mp4'
import './ActiveScreen.css'

function ActiveScreen({ closePlayer} ) {
  return (

    <div className='videobg'>
      <video className='visuals' src={videobg} autoPlay loop muted/>
      <button className='chill' onClick={() => closePlayer(false)}>Daddy, chill</button>
    </div>

  )
}

export default ActiveScreen