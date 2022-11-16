import React, { useState } from 'react'
import cl from "./Categories.module.scss"

export const Categories: React.FC = () => {

  const [types] = useState([
    "Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"
  ])

  const [active, setActive] = useState(0)

  return (
    <div className={cl.categories}>{
    types.map((item, index) => {
        return (
            <li key={item} onClick={() => setActive(index)} className={active === index ? cl.categoryActive : cl.category}>{item}</li>
        )
    })}
    </div>
  )
}
