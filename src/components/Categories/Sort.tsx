import React, {useState} from 'react'
import { Dropdown } from '../UI/Dropdown/Dropdown'
import cl from "./Categories.module.scss"

export const Sort: React.FC = () => {

  const [dropdown, setDropdown] = useState(false)
  const [sort, setSort] = useState("популярности")
  const [allSorts] = useState([
    {id: 1, name: "по популярности"},
    {id: 2, name: "по цене"},
    {id: 3, name: "по алфавиту"}
  ])

  const offDropdownMenu = () => setDropdown(false)

  const changeSort = (par: string) => setSort(par)

  return (
    <div className={cl.sort} onClick={() => setDropdown(!dropdown)}>
        <svg className={dropdown ? "" : cl.down} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z" fill="#2C2C2C"/>
        </svg>
        <p className={cl.black}>Сортировка по:</p>
        <p className={cl.orange}>{sort}</p>
        <Dropdown state={dropdown} stateFunc={offDropdownMenu}>
          {allSorts.map(sort => {
            return (
              <li key={sort.id} onClick={() => changeSort(sort.name)}>{sort.name}</li>
            )
          })}
        </Dropdown>
    </div>
  )
}