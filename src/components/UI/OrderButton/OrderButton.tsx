import React, { useState } from 'react'
import cl from "./OrderButton.module.scss"

export const OrderButton: React.FC = () => {

  const [amount, setAmount] = useState<number>(0)

  const increaseAmount = () => {
    setAmount(amount + 1)
  }

  return (
    <button className={cl.button} onClick={increaseAmount}>+ Добавить {amount > 0 && amount}</button>
  )
}