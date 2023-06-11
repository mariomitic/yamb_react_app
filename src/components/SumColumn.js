import React from 'react'
import './MainStyle.css'

function SumColumn(props) {

  return (
    <div>
        <div className='sumColumn'>
        <div className='sumSpacing cellBorder'></div>
        <div className='sumSpacing cellBorder'></div>
        <div className='sumSpacing cellBorder'></div>
        <div className='sumSpacing cellBorder'></div>
        <div className='sumSpacing cellBorder'></div>
        <div className='sumSpacing cellBorder'></div>
        <div className='sumSpacing cellBorder'></div>
     <div className='sumBackground cellBorder'><b>{props.sum1_6Display}</b></div>
        <div className='sumSpacing cellBorder'></div>
        <div className='sumSpacing cellBorder'></div>
     <div className=' sumBackground cellBorder'><b>{props.sumMax_MinDisplay}</b></div>
        <div className='sumSpacing cellBorder'></div>
        <div className='sumSpacing cellBorder'></div>
        <div className='sumSpacing cellBorder'></div>
        <div className='sumSpacing cellBorder'></div>
        <div className='sumSpacing cellBorder'></div>
     <div className='sumBackground cellBorder'><b>{props.sumBottomDisplay}</b></div>
     <div className='sumBackground cellBorder'><b>{props.sumSumDisplay}</b></div>
     </div>
     

    </div>
  )
}

export default SumColumn
