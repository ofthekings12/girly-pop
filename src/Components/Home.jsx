import { useState } from 'react'
import './Home.css'
import ActiveScreen from './ActiveScreen';


function Home() {
const [openPlayer, setOpenPlayer] = useState(false);

  return (
    <div className='bg'>
      <button className='get-girly-pop' onClick={() => {
        setOpenPlayer(true)
      }}>
        Let's Get Girly Pop ✨
      </button>

      {openPlayer && <ActiveScreen closePlayer={setOpenPlayer}/>}
    </div>
    
  )
}

export default Home