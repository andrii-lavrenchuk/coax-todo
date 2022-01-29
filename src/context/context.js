import React, { useReducer, createContext } from 'react';
import todosReducer from './todosReducer';
export const TodosContext = createContext();

const initialState = {
  todos: JSON.parse(localStorage.getItem('todos')) ?? [],
};

export const TodosProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(todosReducer, initialState);

  const addTodo = payload => dispatch({ type: 'add-todo', payload });
  const deleteTodo = payload => dispatch({ type: 'delete-todo', payload });
  const toogleCompleted = payload =>
    dispatch({ type: 'toggle-completed', payload });

  return (
    <TodosContext.Provider
      value={{ todos, addTodo, deleteTodo, toogleCompleted }}
    >
      {children}
    </TodosContext.Provider>
  );
};
