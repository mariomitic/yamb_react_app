<<<<<<< HEAD
import React from 'react'
import './MainStyle.css'

import MemoTable from './MemoTable'//fix it
=======
import React, {useState, useEffect} from 'react'
import './MainStyle.css'

import MemoTable from './MemoTable'
>>>>>>> 357457e3f5a3f7d7c0287d7946c2b6f6b60329e8
import DownColumn from './DownColumn'
import FreeColumn from './FreeColumn'
import UpColumn from './UpColumn'
import CallColumn from './CallColumn'
import HandColumn from './HandColumn'
import SumColumn from './SumColumn'




<<<<<<< HEAD
function Calculations() {



  return (
    <div>
   
    <MemoTable />
    <DownColumn />
    <FreeColumn />
    <UpColumn />
    <CallColumn />
    <HandColumn />
    <SumColumn />
   
=======
function Calculations(props) {
  let allKept = props.allKept;
  allKept.sort();

  //states of column "down"
  const [downone, setDownOne] = useState();
  const [downoneMute, setDownOneMute] = useState(false)
  const [downtwo, setDownTwo] = useState();
  const [downtwoMute, setDownTwoMute] = useState(true)
  const [downthree, setDownThree] = useState();
  const [downthreeMute, setDownThreeMute] = useState(true)
  const [downfour, setDownFour] = useState();
  const [downfourMute, setDownFourMute] = useState(true)
  const [downfive, setDownFive] = useState();
  const [downfiveMute, setDownFiveMute] = useState(true)
  const [downsix, setDownSix] = useState();
  const [downsixMute, setDownSixMute] = useState(true);

  const [downmax, setDownMax] = useState();
  const [downmaxMute, setDownMaxMute] = useState(true);
  const [downmin, setDownMin] = useState();
  const [downminMute, setDownMinMute] = useState(true);

  const [downthreeOfaKind, setDownThreeOfaKind] = useState();
  const [downthreeOfaKindMute, setDownThreeOfaKindMute] = useState(true);
  const [downscale, setDownScale] = useState();
  const [downscaleMute, setDownScaleMute] = useState(true);
  const [downfull, setDownFull] = useState();
  const [downfullMute, setDownFullMute] = useState(true);
  const [downpoker, setDownPoker] = useState();
  const [downpokerMute, setDownPokerMute] = useState(true);
  const [downyamb, setDownYamb] = useState();
  const [downyambMute, setDownYambMute] = useState(true);

  const [downsum1_6, setDownSum1_6] = useState('');
  const [downsumax_min, setDownSumMax_Min] = useState('');
  const [downsumbottom, setDownSumBottom] = useState('');

  //states of column "free"
  const [freeone, setFreeOne] = useState();
  const [freeoneMute, setFreeOneMute] = useState(false)
  const [freetwo, setFreeTwo] = useState();
  const [freetwoMute, setFreeTwoMute] = useState(false)
  const [freethree, setFreeThree] = useState();
  const [freethreeMute, setFreeThreeMute] = useState(false)
  const [freefour, setFreeFour] = useState();
  const [freefourMute, setFreeFourMute] = useState(false)
  const [freefive, setFreeFive] = useState();
  const [freefiveMute, setFreeFiveMute] = useState(false)
  const [freesix, setFreeSix] = useState();
  const [freesixMute, setFreeSixMute] = useState(false)

  const [freemax, setFreeMax] = useState();
  const [freemaxMute, setFreeMaxMute] = useState(false);
  const [freemin, setFreeMin] = useState();
  const [freeminMute, setFreeMinMute] = useState(false);

  const [freethreeOfaKind, setFreeThreeOfaKind] = useState();
  const [freethreeOfaKindMute, setFreeThreeOfaKindMute] = useState(false);
  const [freescale, setFreeScale] = useState();
  const [freescaleMute, setFreeScaleMute] = useState(false);
  const [freefull, setFreeFull] = useState();
  const [freefullMute, setFreeFullMute] = useState(false);
  const [freepoker, setFreePoker] = useState();
  const [freepokerMute, setFreePokerMute] = useState(false);
  const [freeyamb, setFreeYamb] = useState();
  const [freeyambMute, setFreeYambMute] = useState(false);

  const [freesum1_6, setFreeSum1_6] = useState('');
  const [freesumax_min, setFreeSumMax_Min] = useState('');
  const [freesumbottom, setFreeSumBottom] = useState('');

  //states of column "up"
  const [upone, setUpOne] = useState();
  const [uponeMute, setUpOneMute] = useState(true)
  const [uptwo, setUpTwo] = useState();
  const [uptwoMute, setUpTwoMute] = useState(true)
  const [upthree, setUpThree] = useState();
  const [upthreeMute, setUpThreeMute] = useState(true)
  const [upfour, setUpFour] = useState();
  const [upfourMute, setUpFourMute] = useState(true)
  const [upfive, setUpFive] = useState();
  const [upfiveMute, setUpFiveMute] = useState(true)
  const [upsix, setUpSix] = useState();
  const [upsixMute, setUpSixMute] = useState(true);

  const [upmax, setUpMax] = useState();
  const [upmaxMute, setUpMaxMute] = useState(true);
  const [upmin, setUpMin] = useState();
  const [upminMute, setUpMinMute] = useState(true);

  const [upthreeOfaKind, setUpThreeOfaKind] = useState();
  const [upthreeOfaKindMute, setUpThreeOfaKindMute] = useState(true);
  const [upscale, setUpScale] = useState();
  const [upscaleMute, setUpScaleMute] = useState(true);
  const [upfull, setUpFull] = useState();
  const [upfullMute, setUpFullMute] = useState(true);
  const [uppoker, setUpPoker] = useState();
  const [uppokerMute, setUpPokerMute] = useState(true);
  const [upyamb, setUpYamb] = useState();
  const [upyambMute, setUpYambMute] = useState(false);

  const [upsum1_6, setUpSum1_6] = useState('');
  const [upsumax_min, setUpSumMax_Min] = useState('');
  const [upsumbottom, setUpSumBottom] = useState('');

    //states of column "call"
  const [callone, setCallOne] = useState();
  const [calloneMute, setCallOneMute] = useState(false)
  const [calltwo, setCallTwo] = useState();
  const [calltwoMute, setCallTwoMute] = useState(false)
  const [callthree, setCallThree] = useState();
  const [callthreeMute, setCallThreeMute] = useState(false)
  const [callfour, setCallFour] = useState();
  const [callfourMute, setCallFourMute] = useState(false)
  const [callfive, setCallFive] = useState();
  const [callfiveMute, setCallFiveMute] = useState(false)
  const [callsix, setCallSix] = useState();
  const [callsixMute, setCallSixMute] = useState(false);

  const [callmax, setCallMax] = useState();
  const [callmaxMute, setCallMaxMute] = useState(false);
  const [callmin, setCallMin] = useState();
  const [callminMute, setCallMinMute] = useState(false);

  const [callthreeOfaKind, setCallThreeOfaKind] = useState();
  const [callthreeOfaKindMute, setCallThreeOfaKindMute] = useState(false);
  const [callscale, setCallScale] = useState();
  const [callscaleMute, setCallScaleMute] = useState(false);
  const [callfull, setCallFull] = useState();
  const [callfullMute, setCallFullMute] = useState(false);
  const [callpoker, setCallPoker] = useState();
  const [callpokerMute, setCallPokerMute] = useState(false);
  const [callyamb, setCallYamb] = useState();
  const [callyambMute, setCallYambMute] = useState(false);

  const [callsum1_6, setCallSum1_6] = useState('');
  const [callsumax_min, setCallSumMax_Min] = useState('');
  const [callsumbottom, setCallSumBottom] = useState('');

  const [calledCellOne, setCalledCellOne] = useState(false);
  const [calledCellTwo, setCalledCellTwo] = useState(false);
  const [calledCellThree, setCalledCellThree] = useState(false);
  const [calledCellFour, setCalledCellFour] = useState(false);
  const [calledCellFive, setCalledCellFive] = useState(false);
  const [calledCellSix, setCalledCellSix] = useState(false);

  const [calledCellMax, setCalledCellMax] = useState(false);
  const [calledCellMin, setCalledCellMin] = useState(false);

  const [calledCellthreeOfaKind, setCalledCellThreeOfaKind] = useState(false);
  const [calledCellScale, setCalledCellScale] = useState(false);
  const [calledCellFull, setCalledCellFull] = useState(false);
  const [calledCellPoker, setCalledCellPoker] = useState(false);
  const [calledCellYamb, setCalledCellYamb] = useState(false);

  const [temporaryMutedCell, setTemporaryMutedCell] = useState(false)
  const [temporaryMutedCellAfterCall, setTemporaryMutedCellAfterCall] = useState(false)

    //states of column "hand"
  const [handone, setHandOne] = useState();
  const [handoneMute, setHandOneMute] = useState(false)
  const [handtwo, setHandTwo] = useState();
  const [handtwoMute, setHandTwoMute] = useState(false)
  const [handthree, setHandThree] = useState();
  const [handthreeMute, setHandThreeMute] = useState(false)
  const [handfour, setHandFour] = useState();
  const [handfourMute, setHandFourMute] = useState(false)
  const [handfive, setHandFive] = useState();
  const [handfiveMute, setHandFiveMute] = useState(false)
  const [handsix, setHandSix] = useState();
  const [handsixMute, setHandSixMute] = useState(false);

  const [handmax, setHandMax] = useState();
  const [handmaxMute, setHandMaxMute] = useState(false);
  const [handmin, setHandMin] = useState();
  const [handminMute, setHandMinMute] = useState(false);

  const [handthreeOfaKind, setHandThreeOfaKind] = useState();
  const [handthreeOfaKindMute, setHandThreeOfaKindMute] = useState(false);
  const [handscale, setHandScale] = useState();
  const [handscaleMute, setHandScaleMute] = useState(false);
  const [handfull, setHandFull] = useState();
  const [handfullMute, setHandFullMute] = useState(false);
  const [handpoker, setHandPoker] = useState();
  const [handpokerMute, setHandPokerMute] = useState(false);
  const [handyamb, setHandYamb] = useState();
  const [handyambMute, setHandYambMute] = useState(false);

  const [handsum1_6, setHandSum1_6] = useState('');
  const [handsumax_min, setHandSumMax_Min] = useState('');
  const [handsumbottom, setHandSumBottom] = useState('');

    //states of all sums
  const [grandSum1_6, setgrandSum1_6] = useState(0)
  const [sum1_6Display, setsum1_6Display] = useState(grandSum1_6)
  const [grandSumMax_Min, setgrandSumMax_Min] = useState(0)
  const [sumMax_MinDisplay, setsumMax_MinDisplay] = useState(grandSumMax_Min)
  const [grandSumBottom, setgrandSumBottom] = useState(0)
  const [sumBottomDisplay, setsumBottomDisplay] = useState(grandSumBottom)
  const [sumSumDisplay, setsumSumDisplay] = useState()

  document.addEventListener('click',(e) =>
  { e.target.getAttribute("column");
})

document.addEventListener('contextmenu',(e) =>
{ 
  e.preventDefault()
  if(props.initialCounterValue === 0){return}

  e.target.getAttribute("id");
 
  props.makeThworActive()

  if (e.target.getAttribute("id") === 'callone'){
    setCalledCellOne(true)
    setTemporaryMutedCellAfterCall(true)
    setTemporaryMutedCell(true)
  }
  if (e.target.getAttribute("id") === 'calltwo'){
    setCalledCellTwo(true)
    setTemporaryMutedCellAfterCall(true)
    setTemporaryMutedCell(true)
  }
  if (e.target.getAttribute("id") === 'callthree'){
    setCalledCellThree(true)
    setTemporaryMutedCellAfterCall(true)
    setTemporaryMutedCell(true)
  }
  if (e.target.getAttribute("id") === 'callfour'){
    setCalledCellFour(true)
    setTemporaryMutedCellAfterCall(true)
    setTemporaryMutedCell(true)
  }
  if (e.target.getAttribute("id") === 'callfive'){
    setCalledCellFive(true)
    setTemporaryMutedCellAfterCall(true)
    setTemporaryMutedCell(true)
  }
  if (e.target.getAttribute("id") === 'callsix'){
    setCalledCellSix(true)
    setTemporaryMutedCellAfterCall(true)
    setTemporaryMutedCell(true)
  }
  if (e.target.getAttribute("id") === 'callmax'){
    setCalledCellMax(true)
    setTemporaryMutedCellAfterCall(true)
    setTemporaryMutedCell(true)
  }
  if (e.target.getAttribute("id") === 'callmin'){
    setCalledCellMin(true)
    setTemporaryMutedCellAfterCall(true)
    setTemporaryMutedCell(true)
  }
  if (e.target.getAttribute("id") === 'callthreeofakind'){
    setCalledCellThreeOfaKind(true)
    setTemporaryMutedCellAfterCall(true)
    setTemporaryMutedCell(true)
  }
  if (e.target.getAttribute("id") === 'callscale'){
    setCalledCellScale(true)
    setTemporaryMutedCellAfterCall(true)
    setTemporaryMutedCell(true)
  }
  if (e.target.getAttribute("id") === 'callfull'){
    setCalledCellFull(true)
    setTemporaryMutedCellAfterCall(true)
    setTemporaryMutedCell(true)
  }
  if (e.target.getAttribute("id") === 'callpoker'){
    setCalledCellPoker(true)
    setTemporaryMutedCellAfterCall(true)
    setTemporaryMutedCell(true)
  }
  if (e.target.getAttribute("id") === 'callyamb'){
    setCalledCellYamb(true)
    setTemporaryMutedCellAfterCall(true)
    setTemporaryMutedCell(true)
  }else{return}

})

 const calcOnes = (e) => {
  let elementColumn = e.target.getAttribute("column");
    let scoreOne = 0;
    allKept.map(diceValue => {if(diceValue === 1) {scoreOne = scoreOne + diceValue}
    return scoreOne})
    if(scoreOne === 6){
      scoreOne = 5
    }
    if(elementColumn === 'down'){
    if(props.initialCounterValue === 0){return}else{
    setDownOne(scoreOne)
    setDownOneMute(true)
    setDownTwoMute(false)
    setTemporaryMutedCell(false)
    props.setnumberFieldsLeftDownFreeUp(props.numberFieldsLeftDownFreeUp - 1)
    props.resetDices()
   
      }
  }
    if(elementColumn === 'free'){
    if(props.initialCounterValue === 0){return}else{
    setFreeOne(scoreOne)
    setFreeOneMute(true)
    setTemporaryMutedCell(false)
    props.setnumberFieldsLeftDownFreeUp(props.numberFieldsLeftDownFreeUp - 1)
    props.resetDices()
         }
  }
    if(elementColumn === 'up'){
    if(props.initialCounterValue === 0){return}else{
    setUpOne(scoreOne)
    setUpOneMute(true)
    setTemporaryMutedCell(false)
    props.setnumberFieldsLeftDownFreeUp(props.numberFieldsLeftDownFreeUp - 1)
    props.resetDices()
      }
  }
    if(elementColumn === 'call'){
    if(props.initialCounterValue === 0){return}else{
    setCallOne(scoreOne)
    setCallOneMute(true)
    setTemporaryMutedCell(false)
    setCalledCellOne(false)
    setTemporaryMutedCellAfterCall(false)
    props.setnumberFieldsLeftCallHand(props.numberFieldsLeftCallHand - 1)
    props.resetDices()

    }
}
    if(elementColumn === 'hand'){
    if(props.initialCounterValue === 0){return}else{
    setHandOne(scoreOne)
    setHandOneMute(true)
    props.setnumberFieldsLeftCallHand(props.numberFieldsLeftCallHand - 1)
    props.resetDices()
    }
}
 }

  const calcTwos = (e) => {
    let elementColumn = e.target.getAttribute("column");
    let scoreTwo = 0;
    allKept.map(diceValue => {if(diceValue === 2) {scoreTwo = scoreTwo + diceValue}
    return scoreTwo})
    if(scoreTwo === 12){
      scoreTwo = 10
    }
    if(elementColumn === 'down'){
    if(props.initialCounterValue === 0){return}else{
    setDownTwo(scoreTwo)
    setDownTwoMute(true)
    setTemporaryMutedCell(false)
    setDownThreeMute(false)
    props.setnumberFieldsLeftDownFreeUp(props.numberFieldsLeftDownFreeUp - 1)
    props.resetDices()
      }
  }
    if(elementColumn === 'free'){
    if(props.initialCounterValue === 0){return}else{
    setFreeTwo(scoreTwo)
    setFreeTwoMute(true)
    setTemporaryMutedCell(false)
    props.setnumberFieldsLeftDownFreeUp(props.numberFieldsLeftDownFreeUp - 1)
    props.resetDices()
      }
   }
    if(elementColumn === 'up'){
    if(props.initialCounterValue === 0){return}else{
    setUpTwo(scoreTwo)
    setUpTwoMute(true)
    setUpOneMute(false)
    setTemporaryMutedCell(false)
    props.setnumberFieldsLeftDownFreeUp(props.numberFieldsLeftDownFreeUp - 1)
    props.resetDices()
      }
   }
    if(elementColumn === 'call'){
    if(props.initialCounterValue === 0){return}else{
    setCallTwo(scoreTwo)
    setCallTwoMute(true)
    setTemporaryMutedCellAfterCall(false)
    setTemporaryMutedCell(false)
    setCalledCellTwo(false)
    props.setnumberFieldsLeftCallHand(props.numberFieldsLeftCallHand - 1)
    props.resetDices()
      }
   }
    if(elementColumn === 'hand'){
    if(props.initialCounterValue === 0){return}else{
    setHandTwo(scoreTwo)
    setHandTwoMute(true)
    props.setnumberFieldsLeftCallHand(props.numberFieldsLeftCallHand - 1)
    props.resetDices()
      }
   }
  }

  const calcThrees = (e) => {
    let elementColumn = e.target.getAttribute("column");
    let scoreThree = 0;
    allKept.map(diceValue => {if(diceValue === 3) {scoreThree = scoreThree + diceValue}
    return scoreThree})
    if(scoreThree === 18){
      scoreThree = 15
    }
    if(elementColumn === 'down'){
    if(props.initialCounterValue === 0){return}else{
    setDownThree(scoreThree)
    setDownThreeMute(true)
    setDownFourMute(false)
    setTemporaryMutedCell(false)
    props.setnumberFieldsLeftDownFreeUp(props.numberFieldsLeftDownFreeUp - 1)
    props.resetDices()
      }
  }
    if(elementColumn === 'free'){
    if(props.initialCounterValue === 0){return}else{
    setFreeThree(scoreThree)
    setFreeThreeMute(true)
    setTemporaryMutedCell(false)
    props.setnumberFieldsLeftDownFreeUp(props.numberFieldsLeftDownFreeUp - 1)
    props.resetDices()
      }
   }
    if(elementColumn === 'up'){
    if(props.initialCounterValue === 0){return}else{
    setUpThree(scoreThree)
    setUpThreeMute(true)
    setUpTwoMute(false)
    setTemporaryMutedCell(false)
    props.setnumberFieldsLeftDownFreeUp(props.numberFieldsLeftDownFreeUp - 1)
    props.resetDices()
      }
   }
    if(elementColumn === 'call'){
    if(props.initialCounterValue === 0){return}else{
    setCallThree(scoreThree)
    setCallThreeMute(true)
    setTemporaryMutedCellAfterCall(false)
    setTemporaryMutedCell(false)
    setCalledCellThree(false)
    props.setnumberFieldsLeftCallHand(props.numberFieldsLeftCallHand - 1)
    props.resetDices()
      }
   }
    if(elementColumn === 'hand'){
    if(props.initialCounterValue === 0){return}else{
    setHandThree(scoreThree)
    setHandThreeMute(true)
    props.setnumberFieldsLeftCallHand(props.numberFieldsLeftCallHand - 1)
    props.resetDices()
      }
   }
}

  const calcFours = (e) => {
    let elementColumn = e.target.getAttribute("column");
    let scoreFour = 0;
    allKept.map(diceValue => {if(diceValue === 4) {scoreFour = scoreFour + diceValue}
    return scoreFour})
    if(scoreFour === 24){
      scoreFour = 20
    }
    if(elementColumn === 'down'){
    if(props.initialCounterValue === 0){return}else{
    setDownFour(scoreFour)
    setDownFourMute(true)
    setDownFiveMute(false)
    setTemporaryMutedCell(false)
    props.setnumberFieldsLeftDownFreeUp(props.numberFieldsLeftDownFreeUp - 1)
    props.resetDices()
      }
  }
    if(elementColumn === 'free'){
    if(props.initialCounterValue === 0){return}else{
    setFreeFour(scoreFour)
    setFreeFourMute(true)
    setTemporaryMutedCell(false)
    props.setnumberFieldsLeftDownFreeUp(props.numberFieldsLeftDownFreeUp - 1)
    props.resetDices()
      }
   }
    if(elementColumn === 'up'){
    if(props.initialCounterValue === 0){return}else{
    setUpFour(scoreFour)
    setUpFourMute(true)
    setUpThreeMute(false)
    setTemporaryMutedCell(false)
    props.setnumberFieldsLeftDownFreeUp(props.numberFieldsLeftDownFreeUp - 1)
    props.resetDices()
      }
   }
   if(elementColumn === 'call'){
    if(props.initialCounterValue === 0){return}else{
    setCallFour(scoreFour)
    setCallFourMute(true)
    setTemporaryMutedCellAfterCall(false)
    setTemporaryMutedCell(false)
    setCalledCellFour(false)
    props.setnumberFieldsLeftCallHand(props.numberFieldsLeftCallHand - 1)
    props.resetDices()
      }
   }
    if(elementColumn === 'hand'){
    if(props.initialCounterValue === 0){return}else{
    setHandFour(scoreFour)
    setHandFourMute(true)
    props.setnumberFieldsLeftCallHand(props.numberFieldsLeftCallHand - 1)
    props.resetDices()
      }
   }
  }

  const calcFives = (e) => {
    let elementColumn = e.target.getAttribute("column");
    let scoreFive = 0;
    allKept.map(diceValue => {if(diceValue === 5) {scoreFive = scoreFive + diceValue}
    return scoreFive})
    if(scoreFive === 30){
      scoreFive = 25
    }
    if(elementColumn === 'down'){
    if(props.initialCounterValue === 0){return}else{
    setDownFive(scoreFive)
    setDownFiveMute(true)
    setDownSixMute(false)
    setTemporaryMutedCell(false)
    props.setnumberFieldsLeftDownFreeUp(props.numberFieldsLeftDownFreeUp - 1)
    props.resetDices()
      }
  }
    if(elementColumn === 'free'){
    if(props.initialCounterValue === 0){return}else{
    setFreeFive(scoreFive)
    setFreeFiveMute(true)
    setTemporaryMutedCell(false)
    props.setnumberFieldsLeftDownFreeUp(props.numberFieldsLeftDownFreeUp - 1)
    props.resetDices()
      }
   }
    if(elementColumn === 'up'){
    if(props.initialCounterValue === 0){return}else{
    setUpFive(scoreFive)
    setUpFiveMute(true)
    setUpFourMute(false)
    setTemporaryMutedCell(false)
    props.setnumberFieldsLeftDownFreeUp(props.numberFieldsLeftDownFreeUp - 1)
    props.resetDices()
      }
   }
    if(elementColumn === 'call'){
    if(props.initialCounterValue === 0){return}else{
    setCallFive(scoreFive)
    setCallFiveMute(true)
    setTemporaryMutedCellAfterCall(false)
    setTemporaryMutedCell(false)
    setCalledCellFive(false)
    props.setnumberFieldsLeftCallHand(props.numberFieldsLeftCallHand - 1)
    props.resetDices()
      }
   }
    if(elementColumn === 'hand'){
    if(props.initialCounterValue === 0){return}else{
    setHandFive(scoreFive)
    setHandFiveMute(true)
    props.setnumberFieldsLeftCallHand(props.numberFieldsLeftCallHand - 1)
    props.resetDices()
      }
   }
  }

  const calcSixes = (e) => {
    let elementColumn = e.target.getAttribute("column");
    let scoreSix = 0;
    allKept.map(diceValue => {if(diceValue === 6) {scoreSix = scoreSix + diceValue}
    return scoreSix})
    if(scoreSix === 36){
      scoreSix = 30
    }
    if(elementColumn === 'down'){
    if(props.initialCounterValue === 0){return}else{
    setDownSix(scoreSix)
    setDownSixMute(true)
    setDownMaxMute(false)
    setTemporaryMutedCell(false)
    props.setnumberFieldsLeftDownFreeUp(props.numberFieldsLeftDownFreeUp - 1)
    props.resetDices()
      }
  }
    if(elementColumn === 'free'){
    if(props.initialCounterValue === 0){return}else{
    setFreeSix(scoreSix)
    setFreeSixMute(true)
    setTemporaryMutedCell(false)
    props.setnumberFieldsLeftDownFreeUp(props.numberFieldsLeftDownFreeUp - 1)
    props.resetDices()
      }
   }
    if(elementColumn === 'up'){
    if(props.initialCounterValue === 0){return}else{
    setUpSix(scoreSix)
    setUpSixMute(true)
    setUpFiveMute(false)
    setTemporaryMutedCell(false)
    props.setnumberFieldsLeftDownFreeUp(props.numberFieldsLeftDownFreeUp - 1)
    props.resetDices()
      }
   }
    if(elementColumn === 'call'){
    if(props.initialCounterValue === 0){return}else{
    setCallSix(scoreSix)
    setCallSixMute(true)
    setTemporaryMutedCellAfterCall(false)
    setTemporaryMutedCell(false)
    setCalledCellSix(false)
    props.setnumberFieldsLeftCallHand(props.numberFieldsLeftCallHand - 1)
    props.resetDices()
      }
   }
    if(elementColumn === 'hand'){
    if(props.initialCounterValue === 0){return}else{
    setHandSix(scoreSix)
    setHandSixMute(true)
    props.setnumberFieldsLeftCallHand(props.numberFieldsLeftCallHand - 1)
    props.resetDices()
      }
   }
  }

    const calcMax = (e) => {
    let elementColumn = e.target.getAttribute("column");
     let enterMaxresult = 0;
       for (let i = 1; i<allKept.length; i++){
       enterMaxresult = enterMaxresult + allKept[i]
     }
    if(elementColumn === 'down'){
    if(props.initialCounterValue === 0){return}
    else if(props.allKept[1] === ''){
    props.diceAlert()
    return
    }else{
    setDownMax(enterMaxresult)
    setDownMaxMute(true)
    setDownMinMute(false)
    setTemporaryMutedCell(false)
    props.setnumberFieldsLeftDownFreeUp(props.numberFieldsLeftDownFreeUp - 1)
    props.resetDices()
    }
  }
    if(elementColumn === 'free'){
    if(props.initialCounterValue === 0){return}
    else if(props.allKept[1] === ''){
    props.diceAlert()
    return
    }else{
    setFreeMax(enterMaxresult)
    setFreeMaxMute(true)
    setTemporaryMutedCell(false)
    props.setnumberFieldsLeftDownFreeUp(props.numberFieldsLeftDownFreeUp - 1)
    props.resetDices()
    }
  }
    if(elementColumn === 'up'){
    if(props.initialCounterValue === 0){return}
    else if(props.allKept[1] === ''){
    props.diceAlert()
    return
    }else{
    setUpMax(enterMaxresult)
    setUpMaxMute(true)
    setUpSixMute(false)
    setTemporaryMutedCell(false)
    props.setnumberFieldsLeftDownFreeUp(props.numberFieldsLeftDownFreeUp - 1)
    props.resetDices()
    }
  }
  if(elementColumn === 'call'){
    if(props.initialCounterValue === 0){return}
    else if(props.allKept[1] === ''){
    props.diceAlert()
    return
    }else{
    setCallMax(enterMaxresult)
    setCallMaxMute(true)
    setTemporaryMutedCellAfterCall(false)
    setTemporaryMutedCell(false)
    setCalledCellMax(false)
    props.setnumberFieldsLeftCallHand(props.numberFieldsLeftCallHand - 1)
    props.resetDices()
    }
  }
    if(elementColumn === 'hand'){
    if(props.initialCounterValue === 0){return}
    else if(props.allKept[1] === ''){
    props.diceAlert()
    return
    }else{
    setHandMax(enterMaxresult)
    setHandMaxMute(true)
    props.setnumberFieldsLeftCallHand(props.numberFieldsLeftCallHand - 1)
    props.resetDices()
    }
  }
  }

  const calcMin = (e) => {
    let elementColumn = e.target.getAttribute("column");
     let enterMinresult = 0;
     if(allKept[0] === ''){
      for (let i = 1; i<allKept.length; i++){
      enterMinresult = enterMinresult + allKept[i]
    }}else
    {
      for (let i = 0; i<allKept.length-1; i++){
      enterMinresult = enterMinresult + allKept[i]
    }}
      if(elementColumn === 'down'){
      if(props.initialCounterValue === 0){return}
      if(props.allKept[1] === ''){
      props.diceAlert()
      return
      }else{
      setDownMin(enterMinresult)
      setDownMinMute(true)
      setDownThreeOfaKindMute(false)
      setTemporaryMutedCell(false)
      props.setnumberFieldsLeftDownFreeUp(props.numberFieldsLeftDownFreeUp - 1)
      props.resetDices()
      }
   }
      if(elementColumn === 'free'){
      if(props.initialCounterValue === 0){return}
      if(props.allKept[1] === ''){
      props.diceAlert()
      return
      }else{
      setFreeMin(enterMinresult)
      setFreeMinMute(true)
      setTemporaryMutedCell(false)
      props.setnumberFieldsLeftDownFreeUp(props.numberFieldsLeftDownFreeUp - 1)
      props.resetDices()
      }
   }
      if(elementColumn === 'up'){
      if(props.initialCounterValue === 0){return}
      if(props.allKept[1] === ''){
      props.diceAlert()
      return
      }else{
      setUpMin(enterMinresult)
      setUpMinMute(true)
      setUpMaxMute(false)
      setTemporaryMutedCell(false)
      props.setnumberFieldsLeftDownFreeUp(props.numberFieldsLeftDownFreeUp - 1)
      props.resetDices()
      }
   }
    if(elementColumn === 'call'){
    if(props.initialCounterValue === 0){return}
    if(props.allKept[1] === ''){
    props.diceAlert()
    return
    }else{
    setCallMin(enterMinresult)
    setCallMinMute(true)
    setTemporaryMutedCellAfterCall(false)
    setTemporaryMutedCell(false)
    setCalledCellMin(false)
    props.setnumberFieldsLeftCallHand(props.numberFieldsLeftCallHand - 1)
    props.resetDices()
    }
    }
    if(elementColumn === 'hand'){
    if(props.initialCounterValue === 0){return}
    if(props.allKept[1] === ''){
    props.diceAlert()
    return
    }else{
    setHandMin(enterMinresult)
    setHandMinMute(true)
    props.setnumberFieldsLeftCallHand(props.numberFieldsLeftCallHand - 1)
    props.resetDices()
    }
    }
  }


   const calcThreeOfaKind = (e) => {
    let elementColumn = e.target.getAttribute("column");
    let enterThreeOfaKind = 0;
    if(isNaN(allKept[5]) || isNaN(allKept[4])){ enterThreeOfaKind = 0}
    else if(allKept[5] === allKept[4] && allKept[4] === allKept[3]){
    enterThreeOfaKind = enterThreeOfaKind + allKept[5] + allKept[4] + allKept[3];}
    else if(allKept[4] === allKept[3] && allKept[3] === allKept[2]){
    enterThreeOfaKind = enterThreeOfaKind + allKept[4] + allKept[3] + allKept[2];}
    else if(allKept[3] === allKept[2] && allKept[2] === allKept[1]){
    enterThreeOfaKind = enterThreeOfaKind + allKept[3] + allKept[2] + allKept[1];}
    else if(allKept[2] === allKept[1] && allKept[1] === allKept[0]){
    enterThreeOfaKind = enterThreeOfaKind + allKept[2] + allKept[1] + allKept[0];}

    if(enterThreeOfaKind > 0) {
      enterThreeOfaKind = enterThreeOfaKind + 20
    }
    if(isNaN(enterThreeOfaKind)) {
      enterThreeOfaKind = 0
    }

    if(elementColumn === 'down'){
    if(props.initialCounterValue === 0){return}
    setDownThreeOfaKind(enterThreeOfaKind)
    setDownThreeOfaKindMute(true)
    setDownScaleMute(false)
    setTemporaryMutedCell(false)
    props.setnumberFieldsLeftDownFreeUp(props.numberFieldsLeftDownFreeUp - 1)
    props.resetDices()
    }
    if(elementColumn === 'free'){
    if(props.initialCounterValue === 0){return}
    setFreeThreeOfaKind(enterThreeOfaKind)
    setFreeThreeOfaKindMute(true)
    setTemporaryMutedCell(false)
    props.setnumberFieldsLeftDownFreeUp(props.numberFieldsLeftDownFreeUp - 1)
    props.resetDices()
    }
    if(elementColumn === 'up'){
    if(props.initialCounterValue === 0){return}
    setUpThreeOfaKind(enterThreeOfaKind)
    setUpThreeOfaKindMute(true)
    setUpMinMute(false)
    setTemporaryMutedCell(false)
    props.setnumberFieldsLeftDownFreeUp(props.numberFieldsLeftDownFreeUp - 1)
    props.resetDices()
    }
    if(elementColumn === 'call'){
    if(props.initialCounterValue === 0){return}
    setCallThreeOfaKind(enterThreeOfaKind)
    setCallThreeOfaKindMute(true)
    setTemporaryMutedCellAfterCall(false)
    setTemporaryMutedCell(false)
    setCalledCellThreeOfaKind(false)
    props.setnumberFieldsLeftCallHand(props.numberFieldsLeftCallHand - 1)
    props.resetDices()
    }
    if(elementColumn === 'hand'){
    if(props.initialCounterValue === 0){return}
    setHandThreeOfaKind(enterThreeOfaKind)
    setHandThreeOfaKindMute(true)
    props.setnumberFieldsLeftCallHand(props.numberFieldsLeftCallHand - 1)
    props.resetDices()
    }
     
  }


    const calcScale = (e) => {
      let elementColumn = e.target.getAttribute("column");
      for (let i = 0; i<allKept.length; i++){
      if (allKept[i] === allKept[i+1] || allKept[i] === ''){
        allKept.splice([i], 1)
      }
      }
      let enterScale = 0;
      if ((allKept[0] === 1 && allKept[1] === 2 && allKept[2] === 3 && allKept[3] === 4 && allKept[4] === 5) || 
          (allKept[0] === 2 && allKept[1] === 3 && allKept[2] === 4 && allKept[3] === 5 && allKept[4] === 6)){
      enterScale = 46
      if (props.initialCounterValue === 1){
        enterScale = 66
      }
      if (props.initialCounterValue === 2){
        enterScale = 56
      }}

      if(elementColumn === 'down'){
      if(props.initialCounterValue === 0){return}
      setDownScale(enterScale)
      setDownScaleMute(true)
      setDownFullMute(false)
      setTemporaryMutedCell(false)
      props.setnumberFieldsLeftDownFreeUp(props.numberFieldsLeftDownFreeUp - 1)
      props.resetDices()
      }
      if(elementColumn === 'free'){
      if(props.initialCounterValue === 0){return}
      setFreeScale(enterScale)
      setFreeScaleMute(true)
      setTemporaryMutedCell(false)
      props.setnumberFieldsLeftDownFreeUp(props.numberFieldsLeftDownFreeUp - 1)
      props.resetDices()
      }
      if(elementColumn === 'up'){
      if(props.initialCounterValue === 0){return}
      setUpScale(enterScale)
      setUpScaleMute(true)
      setUpThreeOfaKindMute(false)
      setTemporaryMutedCell(false)
      props.setnumberFieldsLeftDownFreeUp(props.numberFieldsLeftDownFreeUp - 1)
      props.resetDices()
      }
      if(elementColumn === 'call'){
      if(props.initialCounterValue === 0){return}
      setCallScale(enterScale)
      setCallScaleMute(true)
      setTemporaryMutedCellAfterCall(false)
      setTemporaryMutedCell(false)
      setCalledCellScale(false)
      props.setnumberFieldsLeftCallHand(props.numberFieldsLeftCallHand - 1)
      props.resetDices()
      }
      if(elementColumn === 'hand'){
      if(props.initialCounterValue === 0){return}
      setHandScale(enterScale)
      setHandScaleMute(true)
      props.setnumberFieldsLeftCallHand(props.numberFieldsLeftCallHand - 1)
      props.resetDices()
        }
}


   const calcFull = (e) => {
    let elementColumn = e.target.getAttribute("column");
    allKept.reverse()
    let enterFull = 0;
     let three = [];
     let pair = [];
    if(allKept[4] === ''){
      allKept.splice(4,2)
      enterFull = 0
    } else {
      for(let i=0; i<allKept.length; i++){
      if(allKept[i] === allKept[i+1] && allKept[i] === allKept[i+2]){
        three.push(allKept[i], allKept[i+1], allKept[i+2])
        allKept.splice([i], 3)
      }
        }

      for(let i=0; i<allKept.length; i++){
      if(allKept[i] === allKept[i+1]){
        pair.push(allKept[i], allKept[i+1])
        allKept.splice([i], 2)
      }
        }
        if(three[0] === pair[0]){
          enterFull = 0;
          
        }else{
        enterFull = 30 + three[0] + three[1] + three[2] + pair[0] + pair[1];
        }
      }

      if(elementColumn === 'down'){
      if(props.initialCounterValue === 0){return}
      setDownFull(enterFull)
      setDownFullMute(true)
      setDownPokerMute(false)
      setTemporaryMutedCell(false)
      props.setnumberFieldsLeftDownFreeUp(props.numberFieldsLeftDownFreeUp - 1)
      props.resetDices()
      }
      if(elementColumn === 'free'){
      if(props.initialCounterValue === 0){return}
      setFreeFull(enterFull)
      setFreeFullMute(true)
      setTemporaryMutedCell(false)
      props.setnumberFieldsLeftDownFreeUp(props.numberFieldsLeftDownFreeUp - 1)
      props.resetDices()
      }
      if(elementColumn === 'up'){
      if(props.initialCounterValue === 0){return}
      setUpFull(enterFull)
      setUpFullMute(true)
      setUpScaleMute(false)
      setTemporaryMutedCell(false)
      props.setnumberFieldsLeftDownFreeUp(props.numberFieldsLeftDownFreeUp - 1)
      props.resetDices()
      }
      if(elementColumn === 'call'){
      if(props.initialCounterValue === 0){return}
      setCallFull(enterFull)
      setCallFullMute(true)
      setTemporaryMutedCellAfterCall(false)
      setTemporaryMutedCell(false)
      setCalledCellFull(false)
      props.setnumberFieldsLeftCallHand(props.numberFieldsLeftCallHand - 1)
      props.resetDices()
      }
      if(elementColumn === 'hand'){
      if(props.initialCounterValue === 0){return}
      setHandFull(enterFull)
      setHandFullMute(true)
      props.setnumberFieldsLeftCallHand(props.numberFieldsLeftCallHand - 1)
      props.resetDices()
      }
    }

    const calcPoker = (e) => {
    let elementColumn = e.target.getAttribute("column");
    let i = 0;
    while (i<allKept.length){
      if (allKept[i] === ''){
        allKept.splice([i], 1)
      }else {i++}
     }
    let enterPoker = 0;
    if(allKept.length<4){
      enterPoker = 0;
    }else if(allKept[0] === allKept[1] && allKept[1] === allKept[2] && allKept[2] === allKept[3]){
      enterPoker = allKept[0] + allKept[1] + allKept[2] + allKept[3] + 40
    }else
    if(allKept[1] === allKept[2] && allKept[2] === allKept[3] && allKept[3] === allKept[4]){
      enterPoker = allKept[1] + allKept[2] + allKept[3] + allKept[4] + 40
    }else
    if(allKept[2] === allKept[3] && allKept[3] === allKept[4] && allKept[4] === allKept[5]){
      enterPoker = allKept[2] + allKept[3] + allKept[4] + allKept[5] + 40
     }

     if(elementColumn === 'down'){
     if(props.initialCounterValue === 0){return}
     setDownPoker(enterPoker)
     setDownPokerMute(true)
     setDownYambMute(false)
     setTemporaryMutedCell(false)
     props.setnumberFieldsLeftDownFreeUp(props.numberFieldsLeftDownFreeUp - 1)
     props.resetDices()
     }
     if(elementColumn === 'free'){
     if(props.initialCounterValue === 0){return}
     setFreePoker(enterPoker)
     setFreePokerMute(true)
     setTemporaryMutedCell(false)
     props.setnumberFieldsLeftDownFreeUp(props.numberFieldsLeftDownFreeUp - 1)
     props.resetDices()
     }
     if(elementColumn === 'up'){
     if(props.initialCounterValue === 0){return}
     setUpPoker(enterPoker)
     setUpPokerMute(true)
     setUpFullMute(false)
     setTemporaryMutedCell(false)
     props.setnumberFieldsLeftDownFreeUp(props.numberFieldsLeftDownFreeUp - 1)
     props.resetDices()
     }
     if(elementColumn === 'call'){
      if(props.initialCounterValue === 0){return}
      setCallPoker(enterPoker)
      setCallPokerMute(true)
      setTemporaryMutedCellAfterCall(false)
      setTemporaryMutedCell(false)
      setCalledCellPoker(false)
      props.setnumberFieldsLeftCallHand(props.numberFieldsLeftCallHand - 1)
      props.resetDices()
      }
      if(elementColumn === 'hand'){
      if(props.initialCounterValue === 0){return}
      setHandPoker(enterPoker)
      setHandPokerMute(true)
      props.setnumberFieldsLeftCallHand(props.numberFieldsLeftCallHand - 1)
      props.resetDices()
      }

  }


    const calcYamb = (e) => {
      let elementColumn = e.target.getAttribute("column");
      let i = 0;
      while (i<allKept.length){
        if (allKept[i] === ''){
          allKept.splice([i], 1)
        }else {i++}
       }
      let enterYamb = 0;
      if(allKept.length<5){
        enterYamb = 0;
      }else if(allKept[0] === allKept[1] && allKept[1] === allKept[2] && allKept[2] === allKept[3] && allKept[3] === allKept[4]){
        enterYamb = allKept[0] + allKept[1] + allKept[2] + allKept[3] + allKept[4] + 50
      }else
      if(allKept[1] === allKept[2] && allKept[2] === allKept[3] && allKept[3] === allKept[4] && allKept[4] === allKept[5]){
        enterYamb = allKept[1] + allKept[2] + allKept[3] + allKept[4] + allKept[5] + 50
      }

      if(elementColumn === 'down'){
      if(props.initialCounterValue === 0){return}
      setDownYamb(enterYamb)
      setDownYambMute(true)
      setTemporaryMutedCell(false)
      props.setnumberFieldsLeftDownFreeUp(props.numberFieldsLeftDownFreeUp - 1)
      props.resetDices()
      }
      if(elementColumn === 'free'){
      if(props.initialCounterValue === 0){return}
      setFreeYamb(enterYamb)
      setFreeYambMute(true)
      setTemporaryMutedCell(false)
      props.setnumberFieldsLeftDownFreeUp(props.numberFieldsLeftDownFreeUp - 1)
      props.resetDices()
      }
      if(elementColumn === 'up'){
      if(props.initialCounterValue === 0){return}
      setUpYamb(enterYamb)
      setUpYambMute(true)
      setUpPokerMute(false)
      setTemporaryMutedCell(false)
      props.setnumberFieldsLeftDownFreeUp(props.numberFieldsLeftDownFreeUp - 1)
      props.resetDices()
      }
      if(elementColumn === 'call'){
      if(props.initialCounterValue === 0){return}
      setCallYamb(enterYamb)
      setCallYambMute(true)
      setTemporaryMutedCellAfterCall(false)
      setTemporaryMutedCell(false)
      setCalledCellYamb(false)
      props.setnumberFieldsLeftCallHand(props.numberFieldsLeftCallHand - 1)
      props.resetDices()
      }
      if(elementColumn === 'hand'){
      if(props.initialCounterValue === 0){return}
      setHandYamb(enterYamb)
      setHandYambMute(true)
      props.setnumberFieldsLeftCallHand(props.numberFieldsLeftCallHand - 1)
      props.resetDices()
      }
      }



      useEffect(()=>{
        let downsumArr1_6 = [downone, downtwo, downthree, downfour, downfive, downsix];
        let downsum1_6Score = 0;
        for (let i=0; i<downsumArr1_6.length; i++){
        if(isNaN(downsumArr1_6[i])) {continue};
        downsum1_6Score = downsum1_6Score + downsumArr1_6[i]
        }
        if(downsum1_6Score === '' || downsum1_6Score === 0){setDownSum1_6('')}
        else if (downsum1_6Score >=60) {downsum1_6Score = downsum1_6Score + 30;
        setDownSum1_6(downsum1_6Score)}
        else{setDownSum1_6(downsum1_6Score)}
    
        let downsumMax_MinScore = (downmax - downmin) * downone;
        if(isNaN(downsumMax_MinScore)) { setDownSumMax_Min('') }
        else {setDownSumMax_Min(downsumMax_MinScore)}
        
        
        let downsumArrBottom = [downthreeOfaKind, downscale, downfull, downpoker, downyamb];
        let downsumBottomScore = 0;
        for (let i=0; i<downsumArrBottom.length; i++){
        if(isNaN(downsumArrBottom[i])) {continue};
        downsumBottomScore = downsumBottomScore + parseInt(downsumArrBottom[i])
        }
        if(isNaN(downsumBottomScore) || downsumBottomScore === 0) { setDownSumBottom('') }
        else {setDownSumBottom(downsumBottomScore)}
        
 
          // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [downone, downtwo, downthree, downfour, downfive, downsix, downmax, downmin, downthreeOfaKind, downscale, downfull, downpoker, downyamb])
        

      useEffect(()=>{
        let freesumArr1_6 = [freeone, freetwo, freethree, freefour, freefive, freesix];
        let freesum1_6Score = 0;
        for (let i=0; i<freesumArr1_6.length; i++){
        if(isNaN(freesumArr1_6[i])) {continue};
        freesum1_6Score = freesum1_6Score + freesumArr1_6[i]
        }
        if(freesum1_6Score === '' || freesum1_6Score === 0){setFreeSum1_6('')}
        else if (freesum1_6Score >=60) {freesum1_6Score = freesum1_6Score + 30;
        setFreeSum1_6(freesum1_6Score)}
        else{setFreeSum1_6(freesum1_6Score)}
    
        let freesumMax_MinScore = (freemax - freemin) * freeone;
        if(isNaN(freesumMax_MinScore)) { setFreeSumMax_Min('') }
        else {setFreeSumMax_Min(freesumMax_MinScore)}
        
        
        let freesumArrBottom = [freethreeOfaKind, freescale, freefull, freepoker, freeyamb];
        let freesumBottomScore = 0;
        for (let i=0; i<freesumArrBottom.length; i++){
        if(isNaN(freesumArrBottom[i])) {continue};
        freesumBottomScore = freesumBottomScore + parseInt(freesumArrBottom[i])
        }
        if(isNaN(freesumBottomScore) || freesumBottomScore === 0) { setFreeSumBottom('') }
        else {setFreeSumBottom(freesumBottomScore)}
        
  
          // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [freeone, freetwo, freethree, freefour, freefive, freesix, freemax, freemin, freethreeOfaKind, freescale, freefull, freepoker, freeyamb])

        useEffect(()=>{
          let upsumArr1_6 = [upone, uptwo, upthree, upfour, upfive, upsix];
          let upsum1_6Score = 0;
          for (let i=0; i<upsumArr1_6.length; i++){
          if(isNaN(upsumArr1_6[i])) {continue};
          upsum1_6Score = upsum1_6Score + upsumArr1_6[i]
          }
          if(upsum1_6Score === '' || upsum1_6Score === 0){setUpSum1_6('')}
          else if (upsum1_6Score >=60) {upsum1_6Score = upsum1_6Score + 30;
          setUpSum1_6(upsum1_6Score)}
          else{setUpSum1_6(upsum1_6Score)}
      
          let upsumMax_MinScore = (upmax - upmin) * upone;
          if(isNaN(upsumMax_MinScore)) { setUpSumMax_Min('') }
          else {setUpSumMax_Min(upsumMax_MinScore)}
          
          
          let upsumArrBottom = [upthreeOfaKind, upscale, upfull, uppoker, upyamb];
          let upsumBottomScore = 0;
          for (let i=0; i<upsumArrBottom.length; i++){
          if(isNaN(upsumArrBottom[i])) {continue};
          upsumBottomScore = upsumBottomScore + parseInt(upsumArrBottom[i])
          }
          if(isNaN(upsumBottomScore) || upsumBottomScore === 0) { setUpSumBottom('') }
          else {setUpSumBottom(upsumBottomScore)}
          
            // eslint-disable-next-line react-hooks/exhaustive-deps
          }, [upone, uptwo, upthree, upfour, upfive, upsix, upmax, upmin, upthreeOfaKind, upscale, upfull, uppoker, upyamb])


      useEffect(()=>{
        let callsumArr1_6 = [callone, calltwo, callthree, callfour, callfive, callsix];
        let callsum1_6Score = 0;
        for (let i=0; i<callsumArr1_6.length; i++){
        if(isNaN(callsumArr1_6[i])) {continue};
        callsum1_6Score = callsum1_6Score + callsumArr1_6[i]
        }
        if(callsum1_6Score === '' || callsum1_6Score === 0){setCallSum1_6('')}
        else if (callsum1_6Score >=60) {callsum1_6Score = callsum1_6Score + 30;
        setCallSum1_6(callsum1_6Score)}
        else{setCallSum1_6(callsum1_6Score)}
    
        let callsumMax_MinScore = (callmax - callmin) * callone;
        if(isNaN(callsumMax_MinScore)) { setCallSumMax_Min('') }
        else {setCallSumMax_Min(callsumMax_MinScore)}
        
        
        let callsumArrBottom = [callthreeOfaKind, callscale, callfull, callpoker, callyamb];
        let callsumBottomScore = 0;
        for (let i=0; i<callsumArrBottom.length; i++){
        if(isNaN(callsumArrBottom[i])) {continue};
        callsumBottomScore = callsumBottomScore + parseInt(callsumArrBottom[i])
        }
        if(isNaN(callsumBottomScore) || callsumBottomScore === 0) { setCallSumBottom('') }
        else {setCallSumBottom(callsumBottomScore)}

          // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [callone, calltwo, callthree, callfour, callfive, callsix, callmax, callmin, callthreeOfaKind, callscale, callfull, callpoker, callyamb])


      useEffect(()=>{
        let handsumArr1_6 = [handone, handtwo, handthree, handfour, handfive, handsix];
        let handsum1_6Score = 0;
        for (let i=0; i<handsumArr1_6.length; i++){
        if(isNaN(handsumArr1_6[i])) {continue};
        handsum1_6Score = handsum1_6Score + handsumArr1_6[i]
        }
        if(handsum1_6Score === '' || handsum1_6Score === 0){setHandSum1_6('')}
        else if (handsum1_6Score >=60) {handsum1_6Score = handsum1_6Score + 30;
        setHandSum1_6(handsum1_6Score)}
        else{setHandSum1_6(handsum1_6Score)}
    
        let handsumMax_MinScore = (handmax - handmin) * handone;
        if(isNaN(handsumMax_MinScore)) { setHandSumMax_Min('') }
        else {setHandSumMax_Min(handsumMax_MinScore)}
     
        let handsumArrBottom = [handthreeOfaKind, handscale, handfull, handpoker, handyamb];
        let handsumBottomScore = 0;
        for (let i=0; i<handsumArrBottom.length; i++){
        if(isNaN(handsumArrBottom[i])) {continue};
        handsumBottomScore = handsumBottomScore + parseInt(handsumArrBottom[i])
        }
        if(isNaN(handsumBottomScore) || handsumBottomScore === 0) { setHandSumBottom('') }
        else {setHandSumBottom(handsumBottomScore)}

          // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [handone, handtwo, handthree, handfour, handfive, handsix, handmax, handmin, handthreeOfaKind, handscale, handfull, handpoker, handyamb])
 

      useEffect(() => {
        if(props.initialCounterValue === 2){
          setTemporaryMutedCell(true)
        }
         // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [props.initialCounterValue])    
      
      

      useEffect(() =>{
      let grandSum1_6 = 0;
      let grandSum1_6Arr = [downsum1_6, freesum1_6, upsum1_6, callsum1_6, handsum1_6];
      for(let i=0; i<grandSum1_6Arr.length; i++){
         if (!isNaN(parseInt(grandSum1_6Arr[i]))) {grandSum1_6 = grandSum1_6 + grandSum1_6Arr[i]}
         setgrandSum1_6(grandSum1_6)
      }
      setsum1_6Display(grandSum1_6);
      if(grandSum1_6 === 0){setsum1_6Display('')};


      let grandSumMax_Min = 0;
      let grandSumMax_MinArr = [downsumax_min, freesumax_min, upsumax_min, callsumax_min, handsumax_min];
      for(let i=0; i<grandSumMax_MinArr.length; i++){
          if(!isNaN(parseInt(grandSumMax_MinArr[i]))) {grandSumMax_Min = grandSumMax_Min + grandSumMax_MinArr[i]}
          setgrandSumMax_Min(grandSumMax_Min)
       }
       setsumMax_MinDisplay(grandSumMax_Min);
       if(grandSumMax_Min === 0){setsumMax_MinDisplay('')};


      let grandSumBottom = 0;
      let grandSumBottomArr = [downsumbottom, freesumbottom, upsumbottom, callsumbottom, handsumbottom];
      for(let i=0; i<grandSumBottomArr.length; i++){
        if(!isNaN(parseInt(grandSumBottomArr[i]))){grandSumBottom = grandSumBottom + grandSumBottomArr[i]}
        setgrandSumBottom(grandSumBottom)
      }
      setsumBottomDisplay(grandSumBottom);
      if(grandSumBottom === 0){setsumBottomDisplay('')};


      let SumSum = parseInt(grandSum1_6) + parseInt(grandSumMax_Min) + parseInt(grandSumBottom);
      setsumSumDisplay(SumSum);
      if(SumSum === 0){ setsumSumDisplay('')}
      props.setgetFinalResult(SumSum)

      // eslint-disable-next-line react-hooks/exhaustive-deps
      },[downsum1_6, freesum1_6, upsum1_6, callsum1_6, handsum1_6, downsumax_min, freesumax_min, upsumax_min, callsumax_min, handsumax_min, downsumbottom, freesumbottom, upsumbottom, callsumbottom, handsumbottom])
      

    

  return (
    <div>
    <MemoTable />

    <DownColumn calcOnes={calcOnes} downone={downone} downoneMute={downoneMute} calcTwos={calcTwos} downtwo={downtwo} downtwoMute={downtwoMute} calcThrees={calcThrees} downthree={downthree} downthreeMute={downthreeMute} calcFours={calcFours} downfour={downfour} downfourMute={downfourMute} calcFives={calcFives} downfive={downfive} downfiveMute={downfiveMute} calcSixes={calcSixes} downsix={downsix} downsixMute={downsixMute} 
    calcMax={calcMax} downmax={downmax} downmaxMute={downmaxMute} calcMin={calcMin} downmin={downmin} downminMute={downminMute} calcThreeOfaKind={calcThreeOfaKind} downthreeOfaKind={downthreeOfaKind} downthreeOfaKindMute={downthreeOfaKindMute} calcScale={calcScale} downscale={downscale} downscaleMute={downscaleMute} calcFull={calcFull} downfull={downfull} downfullMute={downfullMute} calcPoker={calcPoker} downpoker={downpoker} downpokerMute={downpokerMute} calcYamb={calcYamb} downyamb={downyamb} downyambMute={downyambMute} downsum1_6={downsum1_6} downsumax_min={downsumax_min} downsumbottom={downsumbottom} temporaryMutedCellAfterCall={temporaryMutedCellAfterCall}/>
                
    <FreeColumn calcOnes={calcOnes} freeone={freeone} freeoneMute={freeoneMute} calcTwos={calcTwos} freetwo={freetwo} freetwoMute={freetwoMute} calcThrees={calcThrees} freethree={freethree} freethreeMute={freethreeMute} calcFours={calcFours} freefour={freefour} freefourMute={freefourMute} calcFives={calcFives} freefive={freefive} freefiveMute={freefiveMute} calcSixes={calcSixes} freesix={freesix} freesixMute={freesixMute} calcMax={calcMax} freemax={freemax} freemaxMute={freemaxMute} calcMin={calcMin} freemin={freemin} freeminMute={freeminMute} calcThreeOfaKind={calcThreeOfaKind} freethreeOfaKind={freethreeOfaKind} freethreeOfaKindMute={freethreeOfaKindMute} calcScale={calcScale} freescale={freescale} freescaleMute={freescaleMute} calcFull={calcFull} freefull={freefull} freefullMute={freefullMute} calcPoker={calcPoker} freepoker={freepoker} freepokerMute={freepokerMute} calcYamb={calcYamb} freeyamb={freeyamb} freeyambMute={freeyambMute} freesum1_6={freesum1_6} freesumax_min={freesumax_min} freesumbottom={freesumbottom} temporaryMutedCellAfterCall={temporaryMutedCellAfterCall}/>

    <UpColumn calcOnes={calcOnes} upone={upone} uponeMute={uponeMute} calcTwos={calcTwos} uptwo={uptwo} uptwoMute={uptwoMute} calcThrees={calcThrees} upthree={upthree} upthreeMute={upthreeMute} calcFours={calcFours} upfour={upfour} upfourMute={upfourMute} calcFives={calcFives} upfive={upfive} upfiveMute={upfiveMute} calcSixes={calcSixes} upsix={upsix} upsixMute={upsixMute} 
    calcMax={calcMax} upmax={upmax} upmaxMute={upmaxMute} calcMin={calcMin} upmin={upmin} upminMute={upminMute} calcThreeOfaKind={calcThreeOfaKind} upthreeOfaKind={upthreeOfaKind} upthreeOfaKindMute={upthreeOfaKindMute} calcScale={calcScale} upscale={upscale} upscaleMute={upscaleMute} calcFull={calcFull} upfull={upfull} upfullMute={upfullMute} calcPoker={calcPoker} uppoker={uppoker} uppokerMute={uppokerMute} calcYamb={calcYamb} upyamb={upyamb} upyambMute={upyambMute} upsum1_6={upsum1_6} upsumax_min={upsumax_min} upsumbottom={upsumbottom} temporaryMutedCellAfterCall={temporaryMutedCellAfterCall}/>

    <CallColumn calcOnes={calcOnes} callone={callone} calloneMute={calloneMute} calcTwos={calcTwos} calltwo={calltwo} calltwoMute={calltwoMute} calcThrees={calcThrees} callthree={callthree} callthreeMute={callthreeMute} calcFours={calcFours} callfour={callfour} callfourMute={callfourMute} calcFives={calcFives} callfive={callfive} callfiveMute={callfiveMute} calcSixes={calcSixes} callsix={callsix} callsixMute={callsixMute} 
    calcMax={calcMax} callmax={callmax} callmaxMute={callmaxMute} calcMin={calcMin} callmin={callmin} callminMute={callminMute} calcThreeOfaKind={calcThreeOfaKind} callthreeOfaKind={callthreeOfaKind} callthreeOfaKindMute={callthreeOfaKindMute} calcScale={calcScale} callscale={callscale} callscaleMute={callscaleMute} calcFull={calcFull} callfull={callfull} callfullMute={callfullMute} calcPoker={calcPoker} callpoker={callpoker} callpokerMute={callpokerMute} calcYamb={calcYamb} callyamb={callyamb} callyambMute={callyambMute} callsum1_6={callsum1_6} callsumax_min={callsumax_min} callsumbottom={callsumbottom} temporaryMutedCell={temporaryMutedCell} calledCellOne={calledCellOne} calledCellTwo={calledCellTwo} calledCellThree={calledCellThree} calledCellFour={calledCellFour} calledCellFive={calledCellFive} calledCellSix={calledCellSix} calledCellMax={calledCellMax} calledCellMin={calledCellMin} calledCellthreeOfaKind={calledCellthreeOfaKind} calledCellScale={calledCellScale} calledCellFull={calledCellFull} calledCellPoker={calledCellPoker} calledCellYamb={calledCellYamb}/>

    <HandColumn calcOnes={calcOnes} handone={handone} handoneMute={handoneMute} calcTwos={calcTwos} handtwo={handtwo} handtwoMute={handtwoMute} calcThrees={calcThrees} handthree={handthree} handthreeMute={handthreeMute} calcFours={calcFours} handfour={handfour} handfourMute={handfourMute} calcFives={calcFives} handfive={handfive} handfiveMute={handfiveMute} calcSixes={calcSixes} handsix={handsix} handsixMute={handsixMute} 
    calcMax={calcMax} handmax={handmax} handmaxMute={handmaxMute} calcMin={calcMin} handmin={handmin} handminMute={handminMute} calcThreeOfaKind={calcThreeOfaKind} handthreeOfaKind={handthreeOfaKind} handthreeOfaKindMute={handthreeOfaKindMute} calcScale={calcScale} handscale={handscale} handscaleMute={handscaleMute} calcFull={calcFull} handfull={handfull} handfullMute={handfullMute} calcPoker={calcPoker} handpoker={handpoker} handpokerMute={handpokerMute} calcYamb={calcYamb} handyamb={handyamb} handyambMute={handyambMute} handsum1_6={handsum1_6} handsumax_min={handsumax_min} handsumbottom={handsumbottom} temporaryMutedCell={temporaryMutedCell}/>

    <SumColumn sum1_6Display={sum1_6Display} sumMax_MinDisplay={sumMax_MinDisplay} sumBottomDisplay={sumBottomDisplay} sumSumDisplay={sumSumDisplay}/>
      
>>>>>>> 357457e3f5a3f7d7c0287d7946c2b6f6b60329e8
    </div>
  )
}

export default Calculations
