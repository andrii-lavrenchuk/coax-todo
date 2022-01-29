import React, { useReducer, createContext, useEffect } from 'react';
import todosReducer from './todosReducer';
import { ADD_TODO, DELETE_TODO, TOGGLE_COMPLETED } from './actionTypes';

export const TodosContext = createContext();

const initialState = {
  todos: JSON.parse(localStorage.getItem('todos')) ?? [],
};

export const TodosProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(todosReducer, initialState);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos.todos));
  }, [todos.todos]);

  const addTodo = payload => dispatch({ type: ADD_TODO, payload });
  const deleteTodo = payload => dispatch({ type: DELETE_TODO, payload });
  const toogleCompleted = payload =>
    dispatch({ type: TOGGLE_COMPLETED, payload });

  return (
    <TodosContext.Provider
      value={{ todos, addTodo, deleteTodo, toogleCompleted }}
    >
      {children}
    </TodosContext.Provider>
  );
};
