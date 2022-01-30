import { useContext } from 'react';

import { TodosContext } from '../../context/context';
import Todo from '../Todo';

import s from './TodoList.module.scss';

const TodoList = () => {
  const {
    todos: { todos },
  } = useContext(TodosContext);

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
