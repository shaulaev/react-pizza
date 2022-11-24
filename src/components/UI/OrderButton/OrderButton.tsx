import React, { useState } from 'react'
import cl from "./OrderButton.module.scss"

export const OrderButton: React.FC = () => {

  const [amount, setAmount] = useState<number>(0)

  const increaseAmount = () => {
    setAmount(amount + 1)
  }

  const condition = amount > 0

  return (
    <button className={cl.button} onClick={increaseAmount}>+ Добавить <span className= {condition && cl.amount}>{condition && amount}</span></button>
  )
}