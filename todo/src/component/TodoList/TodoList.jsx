import React from 'react'
import Todo from '../Todo/Todo'
export const TodoList = ({item, setItem}) => {
  return (
    <div className='todo-container'>
        <ul className='todo-list'>
          {item.map(ite=>
          //  <li>{ite.tittle}
          //  {ite.description}
          //  <br/>
         <Todo ite={ite} item={item} setItem={setItem}/>
            )}
        </ul>
    </div>
  )
}
