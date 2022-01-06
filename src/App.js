import React from 'react';
//import './App.css';
import {TodoCounter} from './TodoCounter';
import {TodoSearch} from './TodoSearch';
import {CreateTodoButton} from './CreateTodoButton';
import {TodoList} from './TodoList';
import {TodoItem} from './TodoItem';


const todos = [
  { text:"Cortar Cebolla" , completed: false },
  { text:"Tomar curso React" , completed: false },
  { text:"Llorar con la llorona" , completed: false }

];

function App() {
  return (

  <React.Fragment>
  
    <TodoCounter/>
    <TodoSearch/>
    
    <TodoList>
      {todos.map(todo => (
        <TodoItem key ={todo.text} 
        text ={todo.text}
        completed = {todo.completed}
        />
      ))}
    </TodoList>

    <CreateTodoButton/>

</React.Fragment>
  );
}

export default App;
