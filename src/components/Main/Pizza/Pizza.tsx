import React, { useEffect, useState } from 'react'
import "../Main.scss";
import { OnePizza } from '../OnePizza/OnePizza';
import {PizzaBlockSkeleton} from "../OnePizza/PizzaBlockSkeleton"

export const Pizza: React.FC = () => {

  const [pizza, setPizza] = useState<any[]>([])

  const fetchPizza = () => {
    fetch("https://6366ee2679b0914b75d94e74.mockapi.io/pizza").then((data) => data.json())
    .then((json) => setPizza(json))
  }

  useEffect(fetchPizza, [])

  const loading = () => {
    return (
      <>
        <PizzaBlockSkeleton />
        <PizzaBlockSkeleton />
        <PizzaBlockSkeleton />
        <PizzaBlockSkeleton />
      </>
    )
  }

  return (
    <>
        <h1 className='allPizza'>Все пиццы</h1>
        <div className="pizza-container">
          {
          pizza.length < 1 ? loading()
          : 
          pizza.map(item => {
            return (
              <OnePizza data={item} key={item.id}/>
            )
          })
          }
        </div>
    </>
  )
}