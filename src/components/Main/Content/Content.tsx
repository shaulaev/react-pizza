import React from 'react';
import "../Main.scss";
import { Header } from '../../Header/Header';
import { Categories } from '../Categories/Categories'
import { Pizza } from '../Pizza/Pizza';

export const Content: React.FC = () => {
  return (
    <>
      <Header />
      <Categories />
      <Pizza />
    </>
  )
}
