import React from 'react'
import cl from "./OrderButton.module.scss"

export const OrderButton: React.FC = () => {
  return (
    <button className={cl.button}>+ Добавить</button>
  )
}