import React from 'react'
import '../App.css'

export const ModalView = ({handleModal}) => {
  return (
    <div onClick={handleModal} className="container-modal">

    <div className="modal">
        <h1>Hola!</h1>
        <p>Bienvenido a nuestro modal de ejemplo</p>
        <button 
        className="closed-button"
        onClick={handleModal}
        > Cerrar</button>
    </div>
    </div>
  )
}
