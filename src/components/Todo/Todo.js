import PropTypes from 'prop-types';
import s from './Todo.module.scss';
import IconButton from '../IconButton/IconButton';
import { ReactComponent as DeleteIcon } from '../../icons/trash.svg';
import { ReactComponent as EmptyCheckbox } from '../../icons/emptyCheckbox.svg';
import { ReactComponent as CompletedCheckbox } from '../../icons/completedCheckbox.svg';
import { ReactComponent as SkippedCheckbox } from '../../icons/skippedCheckbox.svg';

const Todo = ({
  completed,
  onToggleCompleted,
  text,
  onDeleteTodo,
  skipped,
}) => (
  <>
    <label>
      <input
        className={s.input}
        type="checkbox"
        checked={completed}
        onChange={onToggleCompleted}
      />

      {!completed && !skipped && (
        <EmptyCheckbox className={s.cursorPointer} width="30" />
      )}

      {completed && (
        <CompletedCheckbox className={s.cursorPointer} width="30" />
      )}
      {!completed && skipped && (
        <SkippedCheckbox className={s.cursorPointer} width="30" />
      )}
    </label>
    <p className={s.todolistText}> {text}</p>

    <IconButton onClick={onDeleteTodo}>
      <DeleteIcon width="25" />
    </IconButton>
  </>
);

Todo.propTypes = {
  completed: PropTypes.bool,
  onToggleCompleted: PropTypes.func,
  text: PropTypes.string,
  onDeleteTodo: PropTypes.func,
  skipped: PropTypes.bool,
};

export default Todo;
