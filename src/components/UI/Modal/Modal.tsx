import React from 'react'
import cl from "./Modal.module.scss"

type Props = {
    children?: String | Number,
    isDark? : boolean
}

export const Modal: React.FC<Props> = () => {
  return (
    <div className={cl.modalMain}>
        <div className={cl.modal}>
            content
        </div>
        <div className={cl.shadow}></div>
    </div>
  )
}