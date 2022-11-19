import React, { useState } from 'react'
import cl from "./OnePizza.module.scss"
import pizza from "../../../assets/img/image 2.png"

export const OnePizza: React.FC = () => {

  const [type] = useState([
    {id: 1, name: "тонкая"},
    {id: 2, name: "традиционная"}
  ])
  const [size] = useState([
    {id: 1, size: "26см"},
    {id: 2, size: "30см"},
    {id: 2, size: "40см"}
  ])

  const [initialType, setInitialType] = useState({id: 1, name: "тонкая"})
  const [initialSize, setInitialSize] = useState({id: 1, size: "26см"})

  return (
    <div className={cl.pizzaContainer}>
        <img src={pizza} alt="" />
        <p className={cl.pizzaName}>Чизбургер пицца</p>
        <div className={cl.pizzaType}>
            <div className={cl.pizzaWidth}>
                {type.map(item => {
                    return (
                        <div className={initialType.name === item.name && cl.selected} onClick={() => setInitialType(item)} key={item.id}>{item.name}</div>
                    )
                })}
            </div>
            <div className={cl.pizzaSize}>
                {size.map(item => {
                    return (
                        <div className={initialSize.size === item.size && cl.selected} onClick={() => setInitialSize(item)} key={item.id}>{item.size}</div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}