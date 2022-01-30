import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Todo from '../Todo';
import todosActions from '../../redux/todos/todos-actions';

import s from './TodoList.module.scss';

const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => {
  return todos.length === 0 ? (
    <p className={s.text}>Add your first task</p>
  ) : (
    <ul className={s.todoList}>
      {todos.map(({ id, text, completed, skipped }) => (
        <li className={s.item} key={id}>
          <Todo
            id={id}
            text={text}
            completed={completed}
            skipped={skipped}
            onDeleteTodo={() => onDeleteTodo(id)}
            onToggleCompleted={() => onToggleCompleted(id)}
          />
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
  onDeleteTodo: id => dispatch(todosActions.deleteTodo(id)),
  onToggleCompleted: id => dispatch(todosActions.toggleCompeted(id)),
});

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDeleteTodo: PropTypes.func,
  onToggleCompleted: PropTypes.func,
};
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
