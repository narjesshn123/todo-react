import React, { useEffect } from 'react'

const TodoForm = ({item, setItem, name, setName, status, setStatus, filterTodo, setFilterTodo}) => {

  const handleSubmit = (e) => {
    e.preventDefault()
   setItem ([...item, {id: Math.random(Math.floor()), completed: false, ...name} ])
   setName({tittle:""})
  }
  const handleChange = (e)=>{
    setName({...name, [e.target.name]: e.target.value})
  }
  const handleChangeItem = (e) =>{
setStatus(e.target.value)
  }
 
  return (
    <div>              
      <form className='todo-form' onSubmit={handleSubmit}>
        <input onChange={handleChange} 
             type={"text"}
             value={name.tittle} 
             name="tittle"
             className='todo-input'
        />
        <button  className='todo-button' type='submit'>
          <i className='fa fa-plus-square'></i>
        </button>
        <div className='select'>
          <select onChange={handleChangeItem} 
                  name='todos'                                    
                  className='filter-todo'>
            <option value={"all"}>all</option>
            <option value={"completed"}>completed</option>
            <option value={"uncompleted"}>uncompleted</option>
          </select>
        </div>
      </form>
    </div>
  )
}

export default TodoForm                       