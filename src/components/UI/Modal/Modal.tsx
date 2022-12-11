import React from 'react'
import cl from "./Modal.module.scss"

type Props = {
    children?: React.ReactNode,
    isDark? : boolean,
    state?: boolean,
    setStateFunc?: Function
}

export const Modal: React.FC<Props> = ({children, isDark, state, setStateFunc}) => {

  const [modal, setModal] = React.useState<boolean>(true)

  const offModal = () => { 
    if(setStateFunc) {
      setStateFunc(false)
    } else {
      setModal(false)
    }
  }

  return (
    <div className={state ? cl.modalMain : modal ? cl.modalMain : cl.off}>
        <div className={cl.modal}>
            {children}
        </div>
        <div className={isDark ? cl.shadow : cl.shadowOff} onClick={offModal}></div>
    </div>
  )
}