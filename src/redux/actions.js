import { ADD_TODO, DELETE_TODO, TOGGLE_COMPLETED } from './actionTypes';

export const addTodo = value => ({
  type: ADD_TODO,
  payload: value,
});

export const deleteTodo = value => ({
  type: DELETE_TODO,
  payload: value,
});

export const toggleCompeted = value => ({
  type: TOGGLE_COMPLETED,
  payload: value,
});
