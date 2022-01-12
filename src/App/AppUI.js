import React from 'react';
import {TodoCounter} from '../TodoCounter';
import {TodoSearch} from '../TodoSearch';
import {CreateTodoButton} from '../CreateTodoButton';
import {TodoList} from '../TodoList';
import {TodoItem} from '../TodoItem';


function AppUI({
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
}) {

    return(
    <React.Fragment>
  
    <TodoCounter
    total = {totalTodos}
    completed = {completedTodos}
    />
    
    <TodoSearch
    searchValue = {searchValue}
    setSearchValue = {setSearchValue}
    />
    
    <TodoList>
      {searchedTodos.map(todo => (
        <TodoItem 
        key ={todo.text} 
        text ={todo.text}
        completed = {todo.completed}
        onComplete={() => completeTodo(todo.text)}
        onDelete={() => deleteTodo(todo.text)}
        />
      ))}
    </TodoList>

    <CreateTodoButton/>

</React.Fragment>

    );
}

export {AppUI};