import shortId from 'shortid';

import types from './todos-types';

const addTodo = text => {
  return {
    type: types.ADD,
    payload: {
      id: shortId.generate(),
      text,
      completed: false,
      skipped: false,
    },
  };
};

const deleteTodo = todoId => ({
  type: types.DELETE,
  payload: todoId,
});

const toggleCompeted = value => ({
  type: types.TOGGLE_COMPLETED,
  payload: value,
});

const todosActions = { addTodo, deleteTodo, toggleCompeted };

export default todosActions;
