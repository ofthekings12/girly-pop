import React from 'react'

function ActiveScreen({ closePlayer} ) {
  return (
    <div className='videobg'>
      <h1>ActiveScreen</h1>
      <button onClick={() => closePlayer(false)}>Daddy, chill</button>
    </div>
  )
}

export default ActiveScreen