import React, { useState } from 'react'
import cl from "./OnePizza.module.scss"
import pizza from "../../../assets/img/image 2.png"
import {OrderButton} from "../../UI/OrderButton/OrderButton"

export const OnePizza: React.FC<any> = ({data}) => {

  const [type] = useState([
    {id: 1, name: "тонкая"},
    {id: 2, name: "традиционная"}
  ])

  const [initialType, setInitialType] = useState({id: 1, name: "тонкая"})
  const [initialSize, setInitialSize] = useState(data.size?.[0])


  return (
    <div className={cl.pizzaContainer}>
        <img src={pizza} alt="" />
        <p className={cl.pizzaName}>Чизбургер пицца</p>
        <div className={cl.pizzaType}>
            <div className={cl.pizzaWidth}>
                {type.map(item => {
                    return (
                        <div className={initialType.name === item.name ? cl.selected : undefined} onClick={() => setInitialType(item)} key={item.id}>{item.name}</div>
                    )
                })}
            </div>
            <div className={cl.pizzaSize}>
                {data.size?.map((item: string) => {
                    return (
                        <div className={initialSize === item ? cl.selected : undefined} onClick={() => setInitialSize(item)} key={item}>{item}</div>
                    )
                })}
            </div>
        </div>
        <div className={cl.order}>
            <div className={cl.pizzaPrice}>от 395Р</div>
            <OrderButton />
        </div>
    </div>
  )
}