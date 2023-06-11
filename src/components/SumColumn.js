import React from 'react'
import './MainStyle.css'

<<<<<<< HEAD
function DownColumn() {


=======
function SumColumn(props) {
>>>>>>> 357457e3f5a3f7d7c0287d7946c2b6f6b60329e8

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
