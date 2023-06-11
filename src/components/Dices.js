import React, {useState, useEffect} from 'react'
import './MainStyle.css'
import Calculations from './Calculations'


function Dices() {

  const [initialCounterValue, setinitialCounterValue] = useState(0)
  const [numberFieldsLeftDownFreeUp, setnumberFieldsLeftDownFreeUp] = useState(39)
  const [numberFieldsLeftCallHand, setnumberFieldsLeftCallHand] = useState(26)

  const [thrownDice1, setthrownDice1] = useState('')
  const [thrownDice2, setthrownDice2] = useState('')
  const [thrownDice3, setthrownDice3] = useState('')
  const [thrownDice4, setthrownDice4] = useState('')
  const [thrownDice5, setthrownDice5] = useState('')
  const [thrownDice6, setthrownDice6] = useState('')

  const [isMuted1, setisMuted1] = useState(false)
  const [isMuted2, setisMuted2] = useState(false)
  const [isMuted3, setisMuted3] = useState(false)
  const [isMuted4, setisMuted4] = useState(false)
  const [isMuted5, setisMuted5] = useState(false)
  const [isMuted6, setisMuted6] = useState(false)

  const [trhowMuted, setthrowMuted] = useState(false)
  const [throwCounter, setthrowCounter] = useState('')
  const [throwDisplayRed, setthrowDisplayRed] = useState(false)

  const [keptDice1, setkeptDice1] = useState('')
  const [keptDice2, setkeptDice2] = useState('')
  const [keptDice3, setkeptDice3] = useState('')
  const [keptDice4, setkeptDice4] = useState('')
  const [keptDice5, setkeptDice5] = useState('')
  const [keptDice6, setkeptDice6] = useState('')

  const [showRules, setShowRules] = useState(false)
  const [dicealertMessageOn, setDiceAlertMessageOn] = useState(false)
  const [engGameMessage, setengGameMessage] = useState(false)

  const [getFinalResult, setgetFinalResult] = useState()


  const diceAlert = () => {
    setDiceAlertMessageOn(!dicealertMessageOn)
  }
  
  const displayRules = () => {
    setShowRules(!showRules)
  }

const throwDices = () => {
  if (initialCounterValue === 2){setthrowMuted(x => !x)}
 if(initialCounterValue === 0) {
  setthrownDice1(Math.floor(Math.random()*6+1))
  setthrownDice2(Math.floor(Math.random()*6+1))
  setthrownDice3(Math.floor(Math.random()*6+1))
  setthrownDice4(Math.floor(Math.random()*6+1))
  setthrownDice5(Math.floor(Math.random()*6+1))
  setthrownDice6(Math.floor(Math.random()*6+1))

  setthrowCounter('')

  } else 
  if(thrownDice1 !==''){setthrownDice1(Math.floor(Math.random()*6+1))}
  if(thrownDice2 !==''){setthrownDice2(Math.floor(Math.random()*6+1))}
  if(thrownDice3 !==''){setthrownDice3(Math.floor(Math.random()*6+1))}
  if(thrownDice4 !==''){setthrownDice4(Math.floor(Math.random()*6+1))}
  if(thrownDice5 !==''){setthrownDice5(Math.floor(Math.random()*6+1))}
  if(thrownDice6 !==''){setthrownDice6(Math.floor(Math.random()*6+1))}
  

 
  setinitialCounterValue(initialCounterValue + 1)
  setthrowCounter(initialCounterValue + 1)

  if(initialCounterValue === 2){
    setthrowDisplayRed(true)
  }
 
}



const keepDice1 = () => {
if (thrownDice1 === ''){
  return
}else{
   setkeptDice1(thrownDice1)
   setthrownDice1('')
   setisMuted1(x => !x);
    }
}
const returnDice1 = () => {
  setkeptDice1('')
  setthrownDice1(keptDice1)
  setisMuted1(x => !x);
}

const keepDice2 = () => {
  if (thrownDice2 === ''){
    return
  }else{
     setkeptDice2(thrownDice2)
     setthrownDice2('')
     setisMuted2(x => !x);
      }
  }
    const returnDice2 = () => {
    setkeptDice2('')
    setthrownDice2(keptDice2)
    setisMuted2(x => !x);
  }

  const keepDice3 = () => {
    if (thrownDice3 === ''){
      return
    }else{
       setkeptDice3(thrownDice3)
       setthrownDice3('')
       setisMuted3(x => !x);
        }
    }
      const returnDice3 = () => {
      setkeptDice3('')
      setthrownDice3(keptDice3)
      setisMuted3(x => !x);
    }

    const keepDice4 = () => {
      if (thrownDice4 === ''){
        return
      }else{
         setkeptDice4(thrownDice4)
         setthrownDice4('')
         setisMuted4(x => !x);
          }
      }
        const returnDice4 = () => {
        setkeptDice4('')
        setthrownDice4(keptDice4)
        setisMuted4(x => !x);
      }
 
      const keepDice5 = () => {
        if (thrownDice5 === ''){
          return
        }else{
           setkeptDice5(thrownDice5)
           setthrownDice5('')
           setisMuted5(x => !x);
            }
        }
          const returnDice5 = () => {
          setkeptDice5('')
          setthrownDice5(keptDice5)
          setisMuted5(x => !x);
        }
    
        const keepDice6 = () => {
          if (thrownDice6 === ''){
            return
          }else{
             setkeptDice6(thrownDice6)
             setthrownDice6('')
             setisMuted6(x => !x);
              }
          }
            const returnDice6 = () => {
            setkeptDice6('')
            setthrownDice6(keptDice6)
            setisMuted6(x => !x);
          }

 let allKept = [keptDice1, keptDice2, keptDice3, keptDice4, keptDice5, keptDice6]



    const resetDices = () => {
      setthrownDice1('')
      setthrownDice2('')
      setthrownDice3('')
      setthrownDice4('')
      setthrownDice5('')
      setthrownDice6('')
    
      setisMuted1(false)
      setisMuted2(false)
      setisMuted3(false)
      setisMuted4(false)
      setisMuted5(false)
      setisMuted6(false)
    
      setthrowMuted(false)
      setinitialCounterValue(0)
      setthrowCounter('')
      setthrowDisplayRed(false)
    
      setkeptDice1('')
      setkeptDice2('')
      setkeptDice3('')
      setkeptDice4('')
      setkeptDice5('')
      setkeptDice6('')
    }


      const makeThworActive = () =>{
      setthrowMuted(false)
    }

  
    useEffect(() => {
      if(numberFieldsLeftDownFreeUp === 0 && initialCounterValue === 1){setthrowMuted(true)}
      }, [numberFieldsLeftDownFreeUp, initialCounterValue])



    useEffect(() =>{
      if(numberFieldsLeftDownFreeUp === 0 && numberFieldsLeftCallHand === 0){
        setengGameMessage(true)
      }
    },[numberFieldsLeftDownFreeUp, numberFieldsLeftCallHand])


  return (

     <div>
   
    {engGameMessage && (
      <div className='endGame'>
        <h2>You final score is</h2>
        <h2>{getFinalResult}</h2>
        <button onClick={() => window.location.reload()} className='ok_btn'><b>Play Agian</b></button>
      </div>
    )}


   {dicealertMessageOn && (
       <div className='diceAlert'> <h2>Must select 5 dices!</h2>
       <br></br>
       <button onClick={diceAlert} className='ok_btn'>Ok</button>
       </div>)
     }



   <button onClick={displayRules} className={dicealertMessageOn || engGameMessage ? 'freezeBackground rules_btn' : 'rules_btn'}><b>Rules</b></button>
      {showRules && (
      <div className='popuptext'>
      <button onClick={displayRules} className='close_btn'><b>Close</b></button>

      <h2 className='rulesTitle'>Game of Yamb Rules</h2>
<h3>Column rules:</h3>
<p>1. "Down" column can be entered from top to bottom.
  <br></br>
2. "Free" column can be entered randomly.
<br></br>
3. "Up" column can be entered from the bottom up.
<br></br>
4. "Call" column can be entered randomly, each cell must be called after first throw (right click).
<br></br>
5. "Hand" column can be entered random only after first throw.</p>

<h3>Values:</h3>
<p>1. "Three": Three of a kind. (ex. 3,3,3)
<br></br>
2. "Straight": Five dices arranged as a scale. (ex. 1,2,3,4,5 or 2,3,4,5,6)
<br></br>
3. "Full": Tree of a kind + one pair. (ex. 4,4,4,3,3)
<br></br>
4. "Poker": Four of a kind. (ex. 5,5,5,5)
<br></br>
5. "Yamb": Five of a kind. (ex. 6,6,6,6,6)</p>

<h3>Calculations:</h3>
<p>1. Each column's (1-6) sum greater than 59pts receives bonus of 30pts.
<br></br>
2. Difference between Max and Min multiplies by value of "1".
<br></br>
3. "Three" gets bonus of 20pts on top of sum of all dices (ex. 6,6,6 gives 38pts).
<br></br>
4. "Straight" won in one throw wins 66pts, second throw 56pts, third throw 46pts.
<br></br>
5. "Full" gets bonus of 30pts on top of sum of all dices (ex. 6,6,6,5,5 gives 58pts).
<br></br>
6. "Poker" gets bonus of 40pts on top of sum of all dices (ex. 6,6,6,6 gives 64pts).
<br></br>
7. "Yamb" gets bonus of 50pts on top of sum of all dices (ex. 6,6,6,6,6 gives 80pts).</p>
      </div>
      )}
     
      <div className={dicealertMessageOn || engGameMessage ? 'App grid-container freezeBackground' : (showRules ? 'App grid-container bluredBackground' : 'App grid-container')}>
      <div className='title'>Yamb Game</div>


     <Calculations allKept={allKept} resetDices={resetDices} initialCounterValue={initialCounterValue} setnumberFieldsLeftDownFreeUp={setnumberFieldsLeftDownFreeUp} setnumberFieldsLeftCallHand={setnumberFieldsLeftCallHand} numberFieldsLeftDownFreeUp={numberFieldsLeftDownFreeUp} numberFieldsLeftCallHand={numberFieldsLeftCallHand} diceAlert={diceAlert} makeThworActive={makeThworActive} setgetFinalResult={setgetFinalResult}/>

    
    <h2 className={throwDisplayRed ? 'countThrow turnRed' : 'countThrow'}>{throwCounter}</h2>
   
    <div className='dicesThrow'>

    <div onClick={throwDices} className={trhowMuted ? 'muteDice throwBox' : 'throwBox'}><b>Throw Dices</b></div>
    <div id='throw1' onClick={keepDice1} className={!isMuted1? 'thrownDice1' : 'muteDice thrownDice1'}>{thrownDice1}</div>
    <div id='throw2' onClick={keepDice2} className={!isMuted2? 'thrownDice2' : 'muteDice thrownDice2'}>{thrownDice2}</div>
    <div id='throw3' onClick={keepDice3} className={!isMuted3? 'thrownDice3' : 'muteDice thrownDice3'}>{thrownDice3}</div>
    <div id='throw4' onClick={keepDice4} className={!isMuted4? 'thrownDice4' : 'muteDice thrownDice4'}>{thrownDice4}</div>
    <div id='throw5' onClick={keepDice5} className={!isMuted5? 'thrownDice5' : 'muteDice thrownDice5'}>{thrownDice5}</div>
    <div id='throw6' onClick={keepDice6} className={!isMuted6? 'thrownDice6' : 'muteDice thrownDice6'}>{thrownDice6}</div>
    </div>
    <div className='dicesKeep'>
    <div className='keepBox'><b>Keep Dices</b></div>
    <div id='keep1' onClick={returnDice1} className={isMuted1 ? 'keptDice1' : 'muteDice keptDice1'}>{keptDice1}</div>
    <div id='keep2' onClick={returnDice2} className={isMuted2 ? 'keptDice2' : 'muteDice keptDice2'}>{keptDice2}</div>
    <div id='keep3' onClick={returnDice3} className={isMuted3 ? 'keptDice3' : 'muteDice keptDice3'}>{keptDice3}</div>
    <div id='keep4' onClick={returnDice4} className={isMuted4 ? 'keptDice4' : 'muteDice keptDice4'}>{keptDice4}</div>
    <div id='keep5' onClick={returnDice5} className={isMuted5 ? 'keptDice5' : 'muteDice keptDice5'}>{keptDice5}</div>
    <div id='keep6' onClick={returnDice6} className={isMuted6 ? 'keptDice6' : 'muteDice keptDice6'}>{keptDice6}</div>

    </div>
    </div>
    </div>
  )
}

export default Dices
