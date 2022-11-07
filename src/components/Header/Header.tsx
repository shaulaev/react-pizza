import React from 'react'
import cl from "./Header.module.scss"

export const Header: React.FC = () => {
  return (
    <header className={cl.header}>
        <div className={cl.container}>
            <div className={cl.logo}></div>
            <div className={cl.cart}></div>
        </div>
    </header>
  )
}
