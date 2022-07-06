import React from 'react'

const TodoList = ({item, setItem, ite}) => {
const handleDelete = (id) => {
setItem(item.filter(oldId=>oldId.id!==ite.id))
console.log(ite)
}
  return (
    <div className='todo'>
      <li className='todo-item'>{ite.tittle}</li>
        <button className='complete-btn'>
          <i className='fas fa-check'></i>
        </button>
        <button onClick={()=>handleDelete(ite.id)} className='trash-btn'>
          <i className='fas fa-trash'></i>
        </button>
    </div>
  )
}

export default TodoList                 