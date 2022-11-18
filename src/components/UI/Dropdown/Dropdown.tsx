import React from 'react'
import cl from "./Dropdown.module.scss"

type Props = {
    state? : boolean,
    stateFunc? : () => void,
    children? : React.ReactNode
}

export const Dropdown: React.FC<Props> = ({state, stateFunc, children}) => {

  return (
    <>
    <div className={state ? cl.dropdownOn : cl.dropdownOff}>
        <ul className={cl.dropdownList} onClick={stateFunc}>
            {children}
        </ul>
    </div>
    </>
  )
}