import { connect } from 'react-redux';

import s from './CountTasks.module.scss';

const CountTasks = ({ todos }) => {
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

const mapStateToProps = state => ({
  todos: state.todos,
});

export default connect(mapStateToProps)(CountTasks);
