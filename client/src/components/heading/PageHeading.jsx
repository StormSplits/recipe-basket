import React from 'react'
import './pageHeading.css'
export const PageHeading = (props) => {
  return (
    <div className="headings">
        <h2 className='headingTop'>{props.top}</h2>
        <h2 className='headingBottom'>{props.bottom}</h2>
    </div>
  )
}
