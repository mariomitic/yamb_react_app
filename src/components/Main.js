import React from 'react'
import './MainStyle.css'
// import Dices from './Dices'
import NewDices from './NewDices'
import MemoTable from './MemoTable'
import DownColumn from './DownColumn'
import FreeColumn from './FreeColumn'
import UpColumn from './UpColumn'
import CallColumn from './CallColumn'
import HandColumn from './HandColumn'
import SumColumn from './SumColumn'
import Dices from './Dices'

function Main() {
  return (
    <div >
      <div className='title'>Yamb Game</div>
      
      <div className='grid-container'>
       
      <p></p>
      <MemoTable className='grid-item1'/>
      <DownColumn className='grid-item1'/>
      <FreeColumn className='grid-item1'/>
      <UpColumn className='grid-item1'/>
      <CallColumn className='grid-item1'/>
      <HandColumn className='grid-item1'/>
      <SumColumn className='grid-item1'/>
      <p></p>
      {/* <NewDices className='grid-item'/> */}
      <Dices className='grid-item'/>
   
           
      
      </div>

    </div>
  )
}

export default Main
