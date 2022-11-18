import React from 'react'
import "./Content.scss"
import { Header } from '../../Header/Header';
import { Categories } from '../../Categories/Categories'

export const Content: React.FC = () => {
  return (
    <>
      <Header />
      <Categories />
    </>
  )
}
