import React, {useReducer} from 'react'

import './DicesStyle.css'



const allDiceState = {
  dice1:'',
  dice2:'',
  dice3:'',
  dice4:'',
  dice5:'',
  dice6:'',

  initialCounterValue: 0,

  kept1:'',
  kept2:'',
  kept3:'',
  kept4:'',
  kept5:'',
  kept6:'',
}

const reducer = (state, action) => {
  switch(action.type) {
    case 'throwDices': return {
      dice1: state.dice1 = Math.floor(Math.random()*6+1),
      dice2: state.dice2 = Math.floor(Math.random()*6+1),
      dice3: state.dice3 = Math.floor(Math.random()*6+1),
      dice4: state.dice4 = Math.floor(Math.random()*6+1),
      dice5: state.dice5 = Math.floor(Math.random()*6+1),
      dice6: state.dice6 = Math.floor(Math.random()*6+1),
      initialCounterValue: state.initialCounterValue + 1,
    }

    case 'keepDice1': return {
      kept1: state.dice1,
      dice2: state.dice2,
      dice3: state.dice3,
      dice4: state.dice4,
      dice5: state.dice5,
      dice6: state.dice6,

      kept2: state.kept2,
      kept3: state.kept3,
      kept4: state.kept4,
      kept5: state.kept5,
      kept6: state.kept6,
    }
    
    case 'returnDice1': return {
      dice1: state.kept1,
      kept2: state.kept2,
      kept3: state.kept3,
      kept4: state.kept4,
      kept5: state.kept5,
      kept6: state.kept6,

      dice2: state.dice2,
      dice3: state.dice3,
      dice4: state.dice4,
      dice5: state.dice5,
      dice6: state.dice6,  
    }

    case 'keepDice2': return {
      dice1: state.dice1,
      kept2: state.dice2,
      dice3: state.dice3,
      dice4: state.dice4,
      dice5: state.dice5,
      dice6: state.dice6,

      kept1: state.kept1,
      kept3: state.kept3,
      kept4: state.kept4,
      kept5: state.kept5,
      kept6: state.kept6,
    }
    case 'returnDice2': return {
      kept1: state.kept1,
      dice2: state.kept2,
      kept3: state.kept3,
      kept4: state.kept4,
      kept5: state.kept5,
      kept6: state.kept6,

      dice1: state.dice1,
      dice3: state.dice3,
      dice4: state.dice4,
      dice5: state.dice5,
      dice6: state.dice6,  
    }

  }

}

function NewDices() {

let trhowMuted = false;
const [newState, dispatch] = useReducer(reducer, allDiceState)
if (newState.initialCounterValue === 3){
trhowMuted = true
}
console.log(newState.kept1)


  





// const keepDices = (e) => {
//   let test = e.target;
 
//   console.log(test)
  
// };



 



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


    <div onClick={()=>dispatch({type: 'throwDices'})} className={trhowMuted ? 'muteDice throwBox' : 'throwBox'}><b>Throw Dices</b></div>
    <div id='throw1' onClick={()=>dispatch({type: 'keepDice1'})}  className='thrownDice1'>{newState.dice1}</div>
    <div id='throw2' onClick={()=>dispatch({type: 'keepDice2'})}  className='thrownDice2'>{newState.dice2}</div>
    <div id='throw3' className='thrownDice3 muteDice'>{newState.dice3}</div>
    <div id='throw4' className='thrownDice4 muteDice'>{newState.dice4}</div>
    <div id='throw5' className='thrownDice5 muteDice'>{newState.dice5}</div>
    <div id='throw6' className='thrownDice6 muteDice'>{newState.dice6}</div>

    <div className='keepBox'><b>Keep Dices</b></div>
    <div id='keep1' onClick={()=>dispatch({type: 'returnDice1'})} className='keptDice1'>{newState.kept1}</div>
    <div id='keep2' onClick={()=>dispatch({type: 'returnDice2'})} className='keptDice2'>{newState.kept2}</div>
    <div id='keep3' className='keptDice3 muteDice'></div>
    <div id='keep4' className='keptDice4 muteDice'></div>
    <div id='keep5' className='keptDice5 muteDice'></div>
    <div id='keep6' className='keptDice6 muteDice'></div>

    </div>
  )
}

export default NewDices
