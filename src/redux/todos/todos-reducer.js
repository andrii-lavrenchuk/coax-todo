import types from './todos-types';

const initialState = {
  todos: [],
};
const todosReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.ADD:
      return {
        todos: [...state.todos, payload],
      };

    case types.DELETE:
      const todos = state.todos.filter(({ id }) => id !== payload);
      return {
        todos,
      };

    case types.TOGGLE_COMPLETED:
      return {
        todos: state.todos.map(todo =>
          todo.id === payload
            ? {
                ...todo,
                completed: !todo.completed,
                skipped: todo.completed,
              }
            : todo,
        ),
      };

    default:
      break;
  }
  return state;
};

export default todosReducer;
