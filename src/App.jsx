import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import { ButtonView } from './components/ButtonView'
import { ModalView } from './components/ModalView'

export const App = () => {

  const [open, setOpen] = useState(false)

 const handleModal = () =>{
  setOpen(
    !open
  )
  

 }

 

  return (
    <>
      <ButtonView handleModal={handleModal} />
      { open &&<ModalView handleModal={handleModal}  />
    }
 
    </>
  )
}


