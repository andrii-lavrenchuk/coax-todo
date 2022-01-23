import PropTypes from 'prop-types';
import s from './TodoList.module.scss';
import Todo from '../Todo/Todo.js';

const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => (
  <ul className={s.todoList}>
    {todos.map(({ id, text, completed, skipped }) => (
      <li className={s.item} key={id}>
        <Todo
          text={text}
          completed={completed}
          skipped={skipped}
          onToggleCompleted={() => onToggleCompleted(id)}
          onDeleteTodo={() => onDeleteTodo(id)}
        />
      </li>
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDeleteTodo: PropTypes.func,
  onToggleCompleted: PropTypes.func,
};
export default TodoList;
