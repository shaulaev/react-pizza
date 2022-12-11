import React from 'react';
import "../Main.scss";
import { Categories } from '../Categories/Categories'
import { Pizza } from '../Pizza/Pizza';

export const Content: React.FC = () => {
  return (
    <>
      <Categories />
      <Pizza />
    </>
  )
}
