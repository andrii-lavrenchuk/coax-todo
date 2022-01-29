import { useContext } from 'react';
import { TodosContext } from '../../context/context';

import s from './CountTasks.module.scss';

const CountTasks = () => {
  const {
    todos: { todos },
  } = useContext(TodosContext);

  const completedTodoCount = () =>
    todos.reduce((total, { completed }) => (completed ? total + 1 : total), 0);

  const skippedTodoCount = () =>
    todos.reduce((total, { skipped }) => (skipped ? total + 1 : total), 0);

  return (
    <>
      <p className={s.text}>All tasks: {todos.length} </p>
      <p className={s.text}>Completed tasks: {completedTodoCount()}</p>
      <p className={s.text}>Skipped tasks: {skippedTodoCount()}</p>
    </>
  );
};

export default CountTasks;
