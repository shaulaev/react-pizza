import React from 'react'
import cl from "./Header.module.scss"
import logo from "../../assets/img/pizza-logo.svg"
import cart from "../../assets/img/cart.svg"

export const Header: React.FC = () => {
  return (
    <header className={cl.header}>
        <div className={cl.container}>
            <div className={cl.logo}>
                <img style={{width: 38}} src={logo} alt="" />
                <div className={cl.logoText}>
                  <h1>React Pizza</h1>
                  <p>самая вкусная пицца во вселенной</p>
                </div>
            </div>
            <div className={cl.cart}>
              <span>520 ₽</span>
              <div>
                <img src={cart} alt="" />
                <span>3</span>
              </div>
            </div>
        </div>
    </header>
  )
}
