import { useState } from 'react'
import './App.css'
import ActiveScreen from './Components/ActiveScreen';


function App() {
const [openPlayer, setOpenPlayer] = useState(false);

  return (
    <div className='bg'>
      {!openPlayer &&
      <button className='get-girly-pop' onClick={() => {
        setOpenPlayer(true)
      }}>
        Let's Get Girly Pop ✨
      </button>}

      {openPlayer && 
      <div className='active'>
        <ActiveScreen closePlayer={setOpenPlayer}/>
        </div>}
    </div>
    
  )
}

export default App
