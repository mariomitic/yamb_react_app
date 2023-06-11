import React from 'react'
import './MainStyle.css'

function CallColumn(props) {

  
    return (


      
          <div className='callColumn'>
      <div className='cellBorder'><b>Call</b></div>
      <div id='callone' column='call' onClick={props.calcOnes} className={props.calledCellOne ? 'calledCell clickable cellBorder' : (props.temporaryMutedCell ? 'temporarilyMuted cellBorder' : (!props.calloneMute ? 'clickable cellBorder' : 'clickable cellBorder muted'))}><b>{props.callone}</b></div>
      <div id='calltwo' column='call' onClick={props.calcTwos} className={props.calledCellTwo ? 'calledCell clickable cellBorder' : (props.temporaryMutedCell ? 'temporarilyMuted cellBorder' : (!props.calltwoMute ? 'clickable cellBorder' : 'clickable cellBorder muted'))}><b>{props.calltwo}</b></div>
      <div id='callthree' column='call' onClick={props.calcThrees} className={props.calledCellThree ? 'calledCell clickable cellBorder' : (props.temporaryMutedCell ? 'temporarilyMuted cellBorder' : (!props.callthreeMute ? 'clickable cellBorder' : 'clickable cellBorder muted'))}><b>{props.callthree}</b></div>
      <div id='callfour' column='call' onClick={props.calcFours} className={props.calledCellFour ? 'calledCell clickable cellBorder' : (props.temporaryMutedCell ? 'temporarilyMuted cellBorder' : (!props.callfourMute ? 'clickable cellBorder' : 'clickable cellBorder muted'))}><b>{props.callfour}</b></div>
      <div id='callfive' column='call' onClick={props.calcFives} className={props.calledCellFive ? 'calledCell clickable cellBorder' : (props.temporaryMutedCell ? 'temporarilyMuted cellBorder' : (!props.callfiveMute ? 'clickable cellBorder' : 'clickable cellBorder muted'))}><b>{props.callfive}</b></div>
      <div id='callsix' column='call' onClick={props.calcSixes} className={props.calledCellSix ? 'calledCell clickable cellBorder' : (props.temporaryMutedCell ? 'temporarilyMuted cellBorder' : (!props.callsixMute ? 'clickable cellBorder' : 'clickable cellBorder muted'))}><b>{props.callsix}</b></div>

      <div className='sumBackground cellBorder'><b>{props.callsum1_6}</b></div>

      <div id='callmax' column='call' onClick={props.calcMax} className={props.calledCellMax ? 'calledCell clickable cellBorder' : (props.temporaryMutedCell ? 'temporarilyMuted cellBorder' : (!props.callmaxMute ? 'clickable cellBorder' : 'clickable cellBorder muted'))}><b>{props.callmax}</b></div>
      <div id='callmin' column='call' onClick={props.calcMin} className={props.calledCellMin ? 'calledCell clickable cellBorder' : (props.temporaryMutedCell ? 'temporarilyMuted cellBorder' : (!props.callminMute ? 'clickable cellBorder' : 'clickable cellBorder muted'))}><b>{props.callmin}</b></div>

      <div className='sumBackground cellBorder'><b>{props.callsumax_min}</b></div>

      <div id='callthreeofakind' column='call' onClick={props.calcThreeOfaKind} className={props.calledCellthreeOfaKind ? 'calledCell clickable cellBorder' : (props.temporaryMutedCell ? 'temporarilyMuted cellBorder' : (!props.callthreeOfaKindMute ? 'clickable cellBorder' : 'clickable cellBorder muted'))}><b>{props.callthreeOfaKind}</b></div>
      <div id='callscale' column='call' onClick={props.calcScale} className={props.calledCellScale ? 'calledCell clickable cellBorder' : (props.temporaryMutedCell ? 'temporarilyMuted cellBorder' : (!props.callscaleMute ? 'clickable cellBorder' : 'clickable cellBorder muted'))}><b>{props.callscale}</b></div>
      <div id='callfull' column='call' onClick={props.calcFull} className={props.calledCellFull ? 'calledCell clickable cellBorder' : (props.temporaryMutedCell ? 'temporarilyMuted cellBorder' : (!props.callfullMute ? 'clickable cellBorder' : 'clickable cellBorder muted'))}><b>{props.callfull}</b></div>
      <div id='callpoker' column='call' onClick={props.calcPoker} className={props.calledCellPoker ? 'calledCell clickable cellBorder' : (props.temporaryMutedCell ? 'temporarilyMuted cellBorder' : (!props.callpokerMute ? 'clickable cellBorder' : 'clickable cellBorder muted'))}><b>{props.callpoker}</b></div>
      <div id='callyamb' column='call' onClick={props.calcYamb} className={props.calledCellYamb ? 'calledCell clickable cellBorder' : (props.temporaryMutedCell ? 'temporarilyMuted cellBorder' : (!props.callyambMute ? 'clickable cellBorder' : 'clickable cellBorder muted'))}><b>{props.callyamb}</b></div>

      <div className='sumBackground cellBorder'><b>{props.callsumbottom}</b></div>
          </div>
  
     
    )
  }
  

export default CallColumn
