import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import shortId from 'shortid';

import { ADD_TODO, DELETE_TODO, TOGGLE_COMPLETED } from './actionTypes';

const initialState = [];

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const newTodo = {
        id: shortId.generate(),
        text: action.payload,
        completed: false,
        skipped: false,
      };

      return {
        ...state,
        todos: [...state.todos, newTodo],
      };
    case DELETE_TODO:
      const todos = state.todos.filter(todo => todo.id !== action.payload);
      return {
        ...state,
        todos,
      };
    case TOGGLE_COMPLETED:
      return {
        todos: state.todos.map(todo =>
          todo.id === action.payload
            ? {
                ...todo,
                completed: !todo.completed,
                skipped: todo.completed,
              }
            : todo,
        ),
      };

    default:
      return state;
  }
};

const store = createStore(todosReducer, composeWithDevTools());
export default store;
