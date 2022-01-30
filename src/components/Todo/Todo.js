import PropTypes from 'prop-types';
import { useContext } from 'react';
import classNames from 'classnames';
import s from './Todo.module.scss';
import { toast } from 'react-toastify';

import IconButton from '../IconButton';
import { ReactComponent as DeleteIcon } from '../../icons/trash.svg';
import { ReactComponent as EmptyCheckbox } from '../../icons/emptyCheckbox.svg';
import { ReactComponent as CompletedCheckbox } from '../../icons/completedCheckbox.svg';
import { ReactComponent as SkippedCheckbox } from '../../icons/skippedCheckbox.svg';
import { TodosContext } from '../../context/context';

const Todo = ({ completed, text, skipped, id }) => {
  const classes = classNames(s.cursorPointer, {
    [s.completed]: completed,
    [s.skipped]: !completed,
    [s.initial]: !skipped && !completed,
  });

  const { deleteTodo, toggleCompleted } = useContext(TodosContext);

  const onDeleteTodo = () => {
    deleteTodo(id);
    toast.info('Todo was deleted');
  };

  return (
    <>
      <label>
        <input
          className={s.input}
          type="checkbox"
          checked={completed}
          onChange={() => toggleCompleted(id)}
        />

        {!completed && !skipped && (
          <EmptyCheckbox className={classes} width="30" />
        )}

        {completed && <CompletedCheckbox className={classes} width="30" />}
        {!completed && skipped && (
          <SkippedCheckbox className={classes} width="30" />
        )}
      </label>
      <p className={s.todoListText}> {text}</p>

      <IconButton onClick={onDeleteTodo}>
        <DeleteIcon width="25" />
      </IconButton>
    </>
  );
};

Todo.propTypes = {
  completed: PropTypes.bool,
  text: PropTypes.string,
  skipped: PropTypes.bool,
};

export default Todo;
