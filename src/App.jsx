import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import { ButtonView } from './components/ButtonView'
import { ModalView } from './components/ModalView'

export const App = () => {

  const [open, setOpen] = useState(true)

 const handleOpen = () =>{
  setOpen(true)

 }

 const handleClosed =() =>{
  setOpen(false)
 }

  return (
    <>
      <ButtonView handleOpen={handleOpen} />
      { open &&
      <ModalView handleClosed={handleClosed} open={open} />
    }
    <h1>hola</h1>
    </>
  )
}


