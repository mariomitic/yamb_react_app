import React from 'react'
import './MainStyle.css'

<<<<<<< HEAD
function HandColumn() {
  return (
  
        <div className='handColumn'>
    <div className='cellBorder'><b>Hand</b></div>
    <div className='clickable cellBorder'><b> </b></div>
    <div className='clickable cellBorder'><b> </b></div>
    <div className='clickable cellBorder'><b> </b></div>
    <div className='clickable cellBorder'><b> </b></div>
    <div className='clickable cellBorder'><b> </b></div>
    <div className='clickable cellBorder'><b> </b></div>
    <div className='sumBackground cellBorder'><b></b></div>
    <div className='clickable cellBorder'><b></b></div>
    <div className='clickable cellBorder'><b></b></div>
    <div className='sumBackground cellBorder'><b></b></div>
    <div className='clickable cellBorder'><b></b></div>
    <div className='clickable cellBorder'><b></b></div>
    <div className='clickable cellBorder'><b></b></div>
    <div className='clickable cellBorder'><b></b></div>
    <div className='clickable cellBorder'><b> </b></div>
    <div className='sumBackground cellBorder'><b></b></div>
        </div>

 
  )
}
=======
function HandColumn(props) {


    return (
      
          <div className='handColumn'>
      <div className='cellBorder'><b>Hand</b></div>
      <div column='hand' onClick={props.calcOnes} className={props.temporaryMutedCell ? 'temporarilyMuted cellBorder' : (!props.handoneMute ? 'clickable cellBorder' : 'clickable cellBorder muted') }><b>{props.handone}</b></div>
      <div column='hand' onClick={props.calcTwos} className={props.temporaryMutedCell ? 'temporarilyMuted cellBorder' : (!props.handtwoMute ? 'clickable cellBorder' : 'clickable cellBorder muted')}><b>{props.handtwo}</b></div>
      <div column='hand' onClick={props.calcThrees} className={props.temporaryMutedCell ? 'temporarilyMuted cellBorder' : (!props.handthreeMute ? 'clickable cellBorder' : 'clickable cellBorder muted')}><b>{props.handthree}</b></div>
      <div column='hand' onClick={props.calcFours} className={props.temporaryMutedCell ? 'temporarilyMuted cellBorder' : (!props.handfourMute ? 'clickable cellBorder' : 'clickable cellBorder muted')}><b>{props.handfour}</b></div>
      <div column='hand' onClick={props.calcFives} className={props.temporaryMutedCell ? 'temporarilyMuted cellBorder' : (!props.handfiveMute ? 'clickable cellBorder' : 'clickable cellBorder muted')}><b>{props.handfive}</b></div>
      <div column='hand' onClick={props.calcSixes} className={props.temporaryMutedCell ? 'temporarilyMuted cellBorder' : (!props.handsixMute ? 'clickable cellBorder' : 'clickable cellBorder muted')}><b>{props.handsix}</b></div>

      <div className='sumBackground cellBorder'><b>{props.handsum1_6}</b></div>

      <div column='hand' onClick={props.calcMax} className={props.temporaryMutedCell ? 'temporarilyMuted cellBorder' : (!props.handmaxMute ? 'clickable cellBorder' : 'clickable cellBorder muted')}><b>{props.handmax}</b></div>
      <div column='hand' onClick={props.calcMin} className={props.temporaryMutedCell ? 'temporarilyMuted cellBorder' : (!props.handminMute ? 'clickable cellBorder' : 'clickable cellBorder muted')}><b>{props.handmin}</b></div>

      <div className='sumBackground cellBorder'><b>{props.handsumax_min}</b></div>

      <div column='hand' onClick={props.calcThreeOfaKind} className={props.temporaryMutedCell ? 'temporarilyMuted cellBorder' : (!props.handthreeOfaKindMute ? 'clickable cellBorder' : 'clickable cellBorder muted')}><b>{props.handthreeOfaKind}</b></div>
      <div column='hand' onClick={props.calcScale} className={props.temporaryMutedCell ? 'temporarilyMuted cellBorder' : (!props.handscaleMute ? 'clickable cellBorder' : 'clickable cellBorder muted')}><b>{props.handscale}</b></div>
      <div column='hand' onClick={props.calcFull} className={props.temporaryMutedCell ? 'temporarilyMuted cellBorder' : (!props.handfullMute ? 'clickable cellBorder' : 'clickable cellBorder muted')}><b>{props.handfull}</b></div>
      <div column='hand' onClick={props.calcPoker} className={props.temporaryMutedCell ? 'temporarilyMuted cellBorder' : (!props.handpokerMute ? 'clickable cellBorder' : 'clickable cellBorder muted')}><b>{props.handpoker}</b></div>
      <div column='hand' onClick={props.calcYamb} className={props.temporaryMutedCell ? 'temporarilyMuted cellBorder' : (!props.handyambMute ? 'clickable cellBorder' : 'clickable cellBorder muted')}><b>{props.handyamb}</b></div>

      <div className='sumBackground cellBorder'><b>{props.handsumbottom}</b></div>
          </div>
  
     
    )
  }
  
>>>>>>> 357457e3f5a3f7d7c0287d7946c2b6f6b60329e8

export default HandColumn
