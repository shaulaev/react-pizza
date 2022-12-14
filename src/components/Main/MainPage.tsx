import React from 'react'
import "./Main.scss"
import { Content } from './Content/Content';
import { Header } from '../Header/Header';


export const MainPage: React.FC = () => {
  return (
    <main className='main'>
      <Header/>
      <Content />
    </main>
  )
}
