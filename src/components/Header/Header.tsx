import React from 'react'
import logo from ""
import cl from "./Header.module.scss"

export const Header: React.FC = () => {
  return (
    <header className={cl.header}>
        <div className={cl.container}>
            <div className={cl.logo}>
                <img src={} alt="" />
            </div>
            <div className={cl.cart}></div>
        </div>
    </header>
  )
}
