import React from 'react'
import "./Main.scss"
import { Content } from './Content/Content';

export const MainPage: React.FC = () => {
  return (
    <main className='main'>
      <Content/>
    </main>
  )
}
