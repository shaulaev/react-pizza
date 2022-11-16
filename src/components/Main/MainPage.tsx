import React from 'react'
import "./Main.scss"
import { Header } from '../Header/Header';
import { Categories } from '../Categories/Categories';

export const MainPage: React.FC = () => {
  return (
    <main className='main'>
      <Header />
      <Categories/>
    </main>
  )
}
