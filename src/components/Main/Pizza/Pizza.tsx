import React, { useEffect } from 'react'
import "../Main.scss";
import { OnePizza } from '../OnePizza/OnePizza';
import { PizzaBlockSkeleton } from "../OnePizza/PizzaBlockSkeleton"
import { useAppDispatch, useAppSelector } from '../../../store';
import { getPizza } from '../../../api/pizza/pizzaApi';
import { Modal } from '../../UI/Modal/Modal';

export const Pizza: React.FC = () => {
  const pizzaD = useAppSelector(state => state.pizza)
  const dispatch = useAppDispatch()

  console.log(pizzaD)

  useEffect(() => {
    dispatch(getPizza())
  }, [dispatch])

  const Loading = () => {
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
          {pizzaD.error && <Modal>{pizzaD.error.message}</Modal>}
          {
            pizzaD.pending ? <Loading /> :
            pizzaD && pizzaD.data.map(item => {
              return (
                <OnePizza data={item} key={item.id}/>
              )
            })
          }
        </div>
    </>
  )
}