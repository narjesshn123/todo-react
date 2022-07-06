import React, { useState } from "react";
import TodoForm from "./component/TodoForm/TodoForm";
import { TodoList } from "./component/TodoList/TodoList";
import {AllTodo} from './component/AllTodo/AllTodo';            
import './App.css';
function App() {
  const[item, setItem] = useState(AllTodo)
  const[name, setName] = useState(
   {tittle:''} 
  )
  return (
    <div className="App">
    <TodoForm item={item} setItem={setItem} name={name} setName={setName}/>  
    <TodoList item={item} setItem={setItem} name={name} setName={setName}/>           
    </div>
  );
}

export default App;                