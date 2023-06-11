import React from 'react'
import './MainStyle.css'

function UpColumn(props) {

  
  
    return (
      
          <div className='upColumn'>
      <div className='cellBorder'><b>Up</b></div>
      <div column='up' onClick={props.calcOnes} className={props.temporaryMutedCellAfterCall ? 'temporarilyMuted cellBorder' : (!props.uponeMute ? 'clickable cellBorder' : 'clickable cellBorder muted')}><b>{props.upone}</b></div>
      <div column='up' onClick={props.calcTwos} className={props.temporaryMutedCellAfterCall ? 'temporarilyMuted cellBorder' : (!props.uptwoMute ? 'clickable cellBorder' : 'clickable cellBorder muted')}><b>{props.uptwo}</b></div>
      <div column='up' onClick={props.calcThrees} className={props.temporaryMutedCellAfterCall ? 'temporarilyMuted cellBorder' : (!props.upthreeMute ? 'clickable cellBorder' : 'clickable cellBorder muted')}><b>{props.upthree}</b></div>
      <div column='up' onClick={props.calcFours} className={props.temporaryMutedCellAfterCall ? 'temporarilyMuted cellBorder' : (!props.upfourMute ? 'clickable cellBorder' : 'clickable cellBorder muted')}><b>{props.upfour}</b></div>
      <div column='up' onClick={props.calcFives} className={props.temporaryMutedCellAfterCall ? 'temporarilyMuted cellBorder' : (!props.upfiveMute ? 'clickable cellBorder' : 'clickable cellBorder muted')}><b>{props.upfive}</b></div>
      <div column='up' onClick={props.calcSixes} className={props.temporaryMutedCellAfterCall ? 'temporarilyMuted cellBorder' : (!props.upsixMute ? 'clickable cellBorder' : 'clickable cellBorder muted')}><b>{props.upsix}</b></div>

      <div className='sumBackground cellBorder'><b>{props.upsum1_6}</b></div>

      <div column='up' onClick={props.calcMax} className={props.temporaryMutedCellAfterCall ? 'temporarilyMuted cellBorder' : (!props.upmaxMute ? 'clickable cellBorder' : 'clickable cellBorder muted')}><b>{props.upmax}</b></div>
      <div column='up' onClick={props.calcMin} className={props.temporaryMutedCellAfterCall ? 'temporarilyMuted cellBorder' : (!props.upminMute ? 'clickable cellBorder' : 'clickable cellBorder muted')}><b>{props.upmin}</b></div>

      <div className='sumBackground cellBorder'><b>{props.upsumax_min}</b></div>

      <div column='up' onClick={props.calcThreeOfaKind} className={props.temporaryMutedCellAfterCall ? 'temporarilyMuted cellBorder' : (!props.upthreeOfaKindMute ? 'clickable cellBorder' : 'clickable cellBorder muted')}><b>{props.upthreeOfaKind}</b></div>
      <div column='up' onClick={props.calcScale} className={props.temporaryMutedCellAfterCall ? 'temporarilyMuted cellBorder' : (!props.upscaleMute ? 'clickable cellBorder' : 'clickable cellBorder muted')}><b>{props.upscale}</b></div>
      <div column='up' onClick={props.calcFull} className={props.temporaryMutedCellAfterCall ? 'temporarilyMuted cellBorder' : (!props.upfullMute ? 'clickable cellBorder' : 'clickable cellBorder muted')}><b>{props.upfull}</b></div>
      <div column='up' onClick={props.calcPoker} className={props.temporaryMutedCellAfterCall ? 'temporarilyMuted cellBorder' : (!props.uppokerMute ? 'clickable cellBorder' : 'clickable cellBorder muted')}><b>{props.uppoker}</b></div>
      <div column='up' onClick={props.calcYamb} className={props.temporaryMutedCellAfterCall ? 'temporarilyMuted cellBorder' : (!props.upyambMute ? 'clickable cellBorder' : 'clickable cellBorder muted')}><b>{props.upyamb}</b></div>
      <div className='sumBackground cellBorder'><b>{props.upsumbottom}</b></div>
          </div>
  
     
    )
  }
  

export default UpColumn
