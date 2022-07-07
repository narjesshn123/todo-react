import React from 'react'

const TodoList = ({item, setItem, ite}) => {
const handleDelete = () => {
setItem(item.filter(oldId=>oldId.id!==ite.id))
}
const handleComplete = () =>{
  setItem(item.map(todo=>{
    if(todo.id === ite.id){
      return{
        ...todo, completed: !todo.completed}
    }
      return todo
  }))
}
  return (
    <div className='todo'>
      <li className={`todo-item ${ite.completed ? "completed":""}`}>{ite.tittle}</li>
        <button onClick={handleComplete} className='complete-btn'>
          <i className='fas fa-check'></i>
        </button>
        <button onClick={()=>handleDelete(ite.id)} className='trash-btn'>
          <i className='fas fa-trash'></i>
        </button>
    </div>
  )
}

export default TodoList                 