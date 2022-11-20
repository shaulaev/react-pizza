import React from 'react'
import "../Main.scss";
import { OnePizza } from '../OnePizza/OnePizza';
import {PizzaBlockSkeleton} from "../OnePizza/PizzaBlockSkeleton"

export const Pizza: React.FC = () => {
  return (
    <>
        <h1 className='allPizza'>Все пиццы</h1>
        <div className="pizza-container">
          <PizzaBlockSkeleton />
        </div>
    </>
  )
}