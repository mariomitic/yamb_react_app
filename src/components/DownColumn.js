import React from 'react'
import './MainStyle.css'

function DownColumn(props) {


  return (
    
        <div className='downColumn'>
    <div className='cellBorder'><b>Down</b></div>
    <div column='down' onClick={props.calcOnes} className={props.temporaryMutedCellAfterCall ? 'temporarilyMuted cellBorder' : (!props.downoneMute ? 'clickable cellBorder' : 'clickable cellBorder muted')}><b>{props.downone}</b></div>
    <div column='down' onClick={props.calcTwos} className={props.temporaryMutedCellAfterCall ? 'temporarilyMuted cellBorder' : (!props.downtwoMute ? 'clickable cellBorder' : 'clickable cellBorder muted')}><b>{props.downtwo}</b></div>
    <div column='down' onClick={props.calcThrees} className={props.temporaryMutedCellAfterCall ? 'temporarilyMuted cellBorder' : (!props.downthreeMute ? 'clickable cellBorder' : 'clickable cellBorder muted')}><b>{props.downthree}</b></div>
    <div column='down' onClick={props.calcFours} className={props.temporaryMutedCellAfterCall ? 'temporarilyMuted cellBorder' : (!props.downfourMute ? 'clickable cellBorder' : 'clickable cellBorder muted')}><b>{props.downfour}</b></div>
    <div column='down' onClick={props.calcFives} className={props.temporaryMutedCellAfterCall ? 'temporarilyMuted cellBorder' : (!props.downfiveMute ? 'clickable cellBorder' : 'clickable cellBorder muted')}><b>{props.downfive}</b></div>
    <div column='down' onClick={props.calcSixes} className={props.temporaryMutedCellAfterCall ? 'temporarilyMuted cellBorder' : (!props.downsixMute ? 'clickable cellBorder' : 'clickable cellBorder muted')}><b>{props.downsix}</b></div>

    <div className='sumBackground cellBorder'><b>{props.downsum1_6}</b></div>

    <div column='down' onClick={props.calcMax} className={props.temporaryMutedCellAfterCall ? 'temporarilyMuted cellBorder' : (!props.downmaxMute ? 'clickable cellBorder' : 'clickable cellBorder muted')}><b>{props.downmax}</b></div>
    <div column='down' onClick={props.calcMin} className={props.temporaryMutedCellAfterCall ? 'temporarilyMuted cellBorder' : (!props.downminMute ? 'clickable cellBorder' : 'clickable cellBorder muted')}><b>{props.downmin}</b></div>

    <div className='sumBackground cellBorder'><b>{props.downsumax_min}</b></div>

    <div column='down' onClick={props.calcThreeOfaKind} className={props.temporaryMutedCellAfterCall ? 'temporarilyMuted cellBorder' : (!props.downthreeOfaKindMute ? 'clickable cellBorder' : 'clickable cellBorder muted')}><b>{props.downthreeOfaKind}</b></div>
    <div column='down' onClick={props.calcScale} className={props.temporaryMutedCellAfterCall ? 'temporarilyMuted cellBorder' : (!props.downscaleMute ? 'clickable cellBorder' : 'clickable cellBorder muted')}><b>{props.downscale}</b></div>
    <div column='down' onClick={props.calcFull} className={props.temporaryMutedCellAfterCall ? 'temporarilyMuted cellBorder' : (!props.downfullMute ? 'clickable cellBorder' : 'clickable cellBorder muted')}><b>{props.downfull}</b></div>
    <div column='down' onClick={props.calcPoker} className={props.temporaryMutedCellAfterCall ? 'temporarilyMuted cellBorder' : (!props.downpokerMute ? 'clickable cellBorder' : 'clickable cellBorder muted')}><b>{props.downpoker}</b></div>
    <div column='down' onClick={props.calcYamb} className={props.temporaryMutedCellAfterCall ? 'temporarilyMuted cellBorder' : (!props.downyambMute ? 'clickable cellBorder' : 'clickable cellBorder muted')}><b>{props.downyamb}</b></div>
    
    <div className='sumBackground cellBorder'><b>{props.downsumbottom}</b></div>
        </div>

   
  )
}

export default DownColumn
