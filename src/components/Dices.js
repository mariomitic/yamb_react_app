import React, {useState} from 'react'

import './DicesStyle.css'


let initialCounterValue = 0

function Dices() {
  const initialDiceState = ''
 
 

  const [thrownDice1, setthrownDice1] = useState(initialDiceState)
  const [thrownDice2, setthrownDice2] = useState(initialDiceState)
  const [thrownDice3, setthrownDice3] = useState(initialDiceState)
  const [thrownDice4, setthrownDice4] = useState(initialDiceState)
  const [thrownDice5, setthrownDice5] = useState(initialDiceState)
  const [thrownDice6, setthrownDice6] = useState(initialDiceState)

  const [isMuted1, setisMuted1] = useState(false)
  const [isMuted2, setisMuted2] = useState(false)
  const [isMuted3, setisMuted3] = useState(false)
  const [isMuted4, setisMuted4] = useState(false)
  const [isMuted5, setisMuted5] = useState(false)
  const [isMuted6, setisMuted6] = useState(false)

  const [trhowMuted, setthrowMuted] = useState(false)

  const [keptDice1, setkeptDice1] = useState(initialDiceState)
  const [keptDice2, setkeptDice2] = useState(initialDiceState)
  const [keptDice3, setkeptDice3] = useState(initialDiceState)
  const [keptDice4, setkeptDice4] = useState(initialDiceState)
  const [keptDice5, setkeptDice5] = useState(initialDiceState)
  const [keptDice6, setkeptDice6] = useState(initialDiceState)

  

const throwDices = () => {
  if (initialCounterValue === 2){setthrowMuted(x => !x)}
 if(initialCounterValue === 0) {
  setthrownDice1(Math.floor(Math.random()*6+1))
  setthrownDice2(Math.floor(Math.random()*6+1))
  setthrownDice3(Math.floor(Math.random()*6+1))
  setthrownDice4(Math.floor(Math.random()*6+1))
  setthrownDice5(Math.floor(Math.random()*6+1))
  setthrownDice6(Math.floor(Math.random()*6+1))


  } else 
  if(thrownDice1 !==''){setthrownDice1(Math.floor(Math.random()*6+1))}
  if(thrownDice2 !==''){setthrownDice2(Math.floor(Math.random()*6+1))}
  if(thrownDice3 !==''){setthrownDice3(Math.floor(Math.random()*6+1))}
  if(thrownDice4 !==''){setthrownDice4(Math.floor(Math.random()*6+1))}
  if(thrownDice5 !==''){setthrownDice5(Math.floor(Math.random()*6+1))}
  if(thrownDice6 !==''){setthrownDice6(Math.floor(Math.random()*6+1))}
  

 
  initialCounterValue = initialCounterValue +1
  console.log(initialCounterValue)
}

const keepDice1 = () => {
if (thrownDice1 === ''){
  return
}else{
   setkeptDice1(thrownDice1)
   setthrownDice1(initialDiceState)
   setisMuted1(x => !x);
    }
}
const returnDice1 = () => {
  setkeptDice1(initialDiceState)
  setthrownDice1(keptDice1)
  setisMuted1(x => !x);
}

const keepDice2 = () => {
  if (thrownDice2 === ''){
    return
  }else{
     setkeptDice2(thrownDice2)
     setthrownDice2(initialDiceState)
     setisMuted2(x => !x);
      }
  }
    const returnDice2 = () => {
    setkeptDice2(initialDiceState)
    setthrownDice2(keptDice2)
    setisMuted2(x => !x);
  }

  const keepDice3 = () => {
    if (thrownDice3 === ''){
      return
    }else{
       setkeptDice3(thrownDice3)
       setthrownDice3(initialDiceState)
       setisMuted3(x => !x);
        }
    }
      const returnDice3 = () => {
      setkeptDice3(initialDiceState)
      setthrownDice3(keptDice3)
      setisMuted3(x => !x);
    }

    const keepDice4 = () => {
      if (thrownDice4 === ''){
        return
      }else{
         setkeptDice4(thrownDice4)
         setthrownDice4(initialDiceState)
         setisMuted4(x => !x);
          }
      }
        const returnDice4 = () => {
        setkeptDice4(initialDiceState)
        setthrownDice4(keptDice4)
        setisMuted4(x => !x);
      }
 
      const keepDice5 = () => {
        if (thrownDice5 === ''){
          return
        }else{
           setkeptDice5(thrownDice5)
           setthrownDice5(initialDiceState)
           setisMuted5(x => !x);
            }
        }
          const returnDice5 = () => {
          setkeptDice5(initialDiceState)
          setthrownDice5(keptDice5)
          setisMuted5(x => !x);
        }
    
        const keepDice6 = () => {
          if (thrownDice6 === ''){
            return
          }else{
             setkeptDice6(thrownDice6)
             setthrownDice6(initialDiceState)
             setisMuted6(x => !x);
              }
          }
            const returnDice6 = () => {
            setkeptDice6(initialDiceState)
            setthrownDice6(keptDice6)
            setisMuted6(x => !x);
          }

 



  return (
    <div className='grid-container3'>
   
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div></div>
   

    <div className='muteDice throwCounter hideElement'><b>1</b></div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>
    <div> </div>


    <div onClick={throwDices} className={trhowMuted ? 'muteDice throwBox' : 'throwBox'}><b>Throw Dices</b></div>
    {/* <div id='throw1' onClick={keepDice} className={isActive ? 'thrownDice1' : 'muteDice thrownDice1'}>{thrownDice1}</div> */}
    <div id='throw1' onClick={keepDice1} className={!isMuted1? 'thrownDice1' : 'muteDice thrownDice1'}>{thrownDice1}</div>
    <div id='throw2' onClick={keepDice2} className={!isMuted2? 'thrownDice2' : 'muteDice thrownDice2'}>{thrownDice2}</div>
    <div id='throw3' onClick={keepDice3} className={!isMuted3? 'thrownDice3' : 'muteDice thrownDice3'}>{thrownDice3}</div>
    <div id='throw4' onClick={keepDice4} className={!isMuted4? 'thrownDice4' : 'muteDice thrownDice4'}>{thrownDice4}</div>
    <div id='throw5' onClick={keepDice5} className={!isMuted5? 'thrownDice5' : 'muteDice thrownDice5'}>{thrownDice5}</div>
    <div id='throw6' onClick={keepDice6} className={!isMuted6? 'thrownDice6' : 'muteDice thrownDice6'}>{thrownDice6}</div>

    <div className='keepBox'><b>Keep Dices</b></div>
    {/* <div id='keep1' onClick={returnDice} className={isActive ? 'muteDice keptDice1' : 'keptDice1'}>{keptDice1}</div> */}
    <div id='keep1' onClick={returnDice1} className={isMuted1 ? 'keptDice1' : 'muteDice keptDice1'}>{keptDice1}</div>
    <div id='keep2' onClick={returnDice2} className={isMuted2 ? 'keptDice2' : 'muteDice keptDice2'}>{keptDice2}</div>
    <div id='keep3' onClick={returnDice3} className={isMuted3 ? 'keptDice3' : 'muteDice keptDice3'}>{keptDice3}</div>
    <div id='keep4' onClick={returnDice4} className={isMuted4 ? 'keptDice4' : 'muteDice keptDice4'}>{keptDice4}</div>
    <div id='keep5' onClick={returnDice5} className={isMuted5 ? 'keptDice5' : 'muteDice keptDice5'}>{keptDice5}</div>
    <div id='keep6' onClick={returnDice6} className={isMuted6 ? 'keptDice6' : 'muteDice keptDice6'}>{keptDice6}</div>

    </div>
  )
}

export default Dices
