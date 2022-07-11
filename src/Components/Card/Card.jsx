import React from 'react'
import './Card.css'
const Card = (props) => {

  const { emoji, heading, details } = props

  return (
    <div className='card'>
      <img src={emoji} alt='' />
      <span>
        {heading}
      </span>
      <span>
        {details}
      </span>
      <button className='c-button'>
        {"LEARN MORE"}
      </button>
    </div>
  )
}

export default Card