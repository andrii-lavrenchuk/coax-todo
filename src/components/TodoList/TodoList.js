import { useContext } from 'react';
import s from './TodoList.module.scss';
import Todo from '../Todo';
import { TodosContext } from '../../context/context';

const TodoList = () => {
  const {
    todos: { todos },
  } = useContext(TodosContext);

  localStorage.setItem('todos', JSON.stringify(todos));

  return todos.length === 0 ? (
    <p className={s.text}>Add your first task</p>
  ) : (
    <ul className={s.todoList}>
      {todos.map(({ id, text, completed, skipped }) => (
        <li className={s.item} key={id}>
          <Todo id={id} text={text} completed={completed} skipped={skipped} />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
