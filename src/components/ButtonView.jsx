import React from 'react'
import '../App.css'

export const ButtonView = ({handleOpen}) => {
  return (
    <div className="container-button">
    <button 
    className='button'
    onClick={handleOpen}
    >
        Abrir Modal
        </button>
    </div>
  )
}
