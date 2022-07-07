import React, { useState, useEffect } from "react";
import TodoForm from "./component/TodoForm/TodoForm";
import { TodoList } from "./component/TodoList/TodoList";
import {AllTodo} from './component/AllTodo/AllTodo';            
import './App.css';
function App() {
  const[item, setItem] = useState(AllTodo)
  const[name, setName] = useState( {tittle:''} )
  const[status, setStatus] = useState('all')
  const[filterTodo, setFilterTodo] = useState([])

  useEffect(()=>{
    handleFilter()
  },[item, status])

  const handleFilter = ()=>{
    switch(status){
      case "completed":
        setFilterTodo(item.filter(ite=>ite.completed === true))
        break;
        case "uncompleted":
        setFilterTodo(item.filter(ite=>ite.completed === false))
        break;
        default:
          setFilterTodo(item)
          break;         
    }
  }
  return (
    <div className="App">
    <TodoForm item={item} setItem={setItem} name={name} setName={setName} status={status} setStatus={setStatus} filterTodo={filterTodo} setFilterTodo={setFilterTodo}/>  
    <TodoList item={item} setItem={setItem} name={name} setName={setName} filterTodo={filterTodo} setFilterTodo={setFilterTodo}/>           
    </div>
  );
}

export default App;                