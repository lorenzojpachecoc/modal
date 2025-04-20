import React from 'react'
import '../App.css'

export const ButtonView = ({handleModal}) => {
  return (
    <div className="container-button">
    <button 
    className='button'
    onClick={handleModal}
    >
        Abrir Modal
        </button>
    </div>
  )
}
