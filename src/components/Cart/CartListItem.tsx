import React, { useState } from 'react'
import cl from "./CartPage.module.scss"
import pizza from "../../assets/img/image 2.png"

export const CartListItem: React.FC = () => {

    const [count, setCount] = useState<number>(0);

    const decreaseCount = (): void => {
        if(count > 0) {
            setCount(count - 1)
        }
    }

    const increaseCount = (): void => {
        if(count < 30) {
            setCount(count + 1)
        }
    }

  return (
    <div className={cl.cartListItem}>
        <div className={cl.shell}>
            <div className={cl.firstPart}>
                <img src={pizza} alt="" />
                <div>
                    <p className={cl.pizzaName}>Сырный цыпленок</p>
                    <p className={cl.pizzaType}>тонкое тесто, <span className={cl.pizzaSize}>26 см.</span></p>
                </div>
            </div>
            <div className={cl.secondPart}>
                <div className={cl.amount}>
                    <div className={cl.multipliers} onClick={decreaseCount}>-</div>
                    <span className={cl.count}>{count}</span>
                    <div className={cl.multipliers} onClick={increaseCount}>+</div>
                </div>
                <div className={cl.price}>790 ₽</div>
                <div className={cl.deleteButton}>+</div>
            </div>
        </div>
        <div className={cl.line} />
    </div>
  )
}