import PropTypes from 'prop-types';
import classNames from 'classnames';
import { toast } from 'react-toastify';

import IconButton from '../IconButton';
import { ReactComponent as DeleteIcon } from '../../icons/trash.svg';
import { ReactComponent as EmptyCheckbox } from '../../icons/emptyCheckbox.svg';
import { ReactComponent as CompletedCheckbox } from '../../icons/completedCheckbox.svg';
import { ReactComponent as SkippedCheckbox } from '../../icons/skippedCheckbox.svg';

import s from './Todo.module.scss';

const Todo = ({
  completed,
  text,
  skipped,
  onDeleteTodo,
  onToggleCompleted,
}) => {
  const classes = classNames(s.cursorPointer, {
    [s.completed]: completed,
    [s.skipped]: !completed,
    [s.initial]: !skipped && !completed,
  });

  const deleteTodo = () => {
    onDeleteTodo();
    toast.info('Todo was deleted');
  };

  return (
    <>
      <label>
        <input
          className={s.input}
          type="checkbox"
          checked={completed}
          onChange={onToggleCompleted}
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

      <IconButton onClick={deleteTodo}>
        <DeleteIcon width="25" />
      </IconButton>
    </>
  );
};

Todo.propTypes = {
  completed: PropTypes.bool,
  text: PropTypes.string,
  skipped: PropTypes.bool,
  onDeleteTodo: PropTypes.func,
  onToggleCompleted: PropTypes.func,
};

export default Todo;
