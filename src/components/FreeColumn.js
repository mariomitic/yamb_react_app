import React from 'react'
import './MainStyle.css'

function FreeColumn(props) {

  
  
  return (
  
        <div className='freeColumn'>
    <div className='cellBorder'><b>Free</b></div>
    <div column='free' onClick={props.calcOnes} className={props.temporaryMutedCellAfterCall ? 'temporarilyMuted cellBorder' : (!props.freeoneMute ? 'clickable cellBorder' : 'clickable cellBorder muted')}><b>{props.freeone}</b></div>
    <div column='free' onClick={props.calcTwos} className={props.temporaryMutedCellAfterCall ? 'temporarilyMuted cellBorder' : (!props.freetwoMute ? 'clickable cellBorder' : 'clickable cellBorder muted')}><b>{props.freetwo}</b></div>
    <div column='free' onClick={props.calcThrees} className={props.temporaryMutedCellAfterCall ? 'temporarilyMuted cellBorder' : (!props.freethreeMute ? 'clickable cellBorder' : 'clickable cellBorder muted')}><b>{props.freethree}</b></div>
    <div column='free' onClick={props.calcFours} className={props.temporaryMutedCellAfterCall ? 'temporarilyMuted cellBorder' : (!props.freefourMute ? 'clickable cellBorder' : 'clickable cellBorder muted')}><b>{props.freefour}</b></div>
    <div column='free' onClick={props.calcFives} className={props.temporaryMutedCellAfterCall ? 'temporarilyMuted cellBorder' : (!props.freefiveMute ? 'clickable cellBorder' : 'clickable cellBorder muted')}><b>{props.freefive}</b></div>
    <div column='free' onClick={props.calcSixes} className={props.temporaryMutedCellAfterCall ? 'temporarilyMuted cellBorder' : (!props.freesixMute ? 'clickable cellBorder' : 'clickable cellBorder muted')}><b>{props.freesix}</b></div>

    <div className='sumBackground cellBorder'><b>{props.freesum1_6}</b></div>

    <div column='free' onClick={props.calcMax} className={props.temporaryMutedCellAfterCall ? 'temporarilyMuted cellBorder' : (!props.freemaxMute ? 'clickable cellBorder' : 'clickable cellBorder muted')}><b>{props.freemax}</b></div>
    <div column='free' onClick={props.calcMin} className={props.temporaryMutedCellAfterCall ? 'temporarilyMuted cellBorder' : (!props.freeminMute ? 'clickable cellBorder' : 'clickable cellBorder muted')}><b>{props.freemin}</b></div>
    <div className='sumBackground cellBorder'><b>{props.freesumax_min}</b></div>
    
    <div column='free' onClick={props.calcThreeOfaKind} className={props.temporaryMutedCellAfterCall ? 'temporarilyMuted cellBorder' : (!props.freethreeOfaKindMute ? 'clickable cellBorder' : 'clickable cellBorder muted')}><b>{props.freethreeOfaKind}</b></div>
    <div column='free' onClick={props.calcScale} className={props.temporaryMutedCellAfterCall ? 'temporarilyMuted cellBorder' : (!props.freescaleMute ? 'clickable cellBorder' : 'clickable cellBorder muted')}><b>{props.freescale}</b></div>
    <div column='free' onClick={props.calcFull} className={props.temporaryMutedCellAfterCall ? 'temporarilyMuted cellBorder' : (!props.freefullMute ? 'clickable cellBorder' : 'clickable cellBorder muted')}><b>{props.freefull}</b></div>
    <div column='free' onClick={props.calcPoker} className={props.temporaryMutedCellAfterCall ? 'temporarilyMuted cellBorder' : (!props.freepokerMute ? 'clickable cellBorder' : 'clickable cellBorder muted')}><b>{props.freepoker}</b></div>
    <div column='free' onClick={props.calcYamb} className={props.temporaryMutedCellAfterCall ? 'temporarilyMuted cellBorder' : (!props.freeyambMute ? 'clickable cellBorder' : 'clickable cellBorder muted')}><b>{props.freeyamb}</b></div>
    <div className='sumBackground cellBorder'><b>{props.freesumbottom}</b></div>
        </div>

   
  )
}

export default FreeColumn
