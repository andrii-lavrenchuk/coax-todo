import { useState } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

import todosActions from '../../redux/todos/todos-actions';

import s from './Form.module.scss';

const Form = ({ todos, onSubmit }) => {
  const [value, setValue] = useState('');

  const addNewTask = e => {
    e.preventDefault();

    const duplicateTodo = todos.some(todo => todo.text === value.toLowerCase());

    if (duplicateTodo) {
      toast.error(`Todo with text '${value}' is already exist!`);

      return;
    }
    if (value.trim() === '') {
      toast.warn('Please, fill the field');

      return;
    }
    if (value.length > 38) {
      toast.error('Too much words!');

      return;
    }

    onSubmit(value.toLowerCase());
    toast.info('New todo was added');
    resetForm();
  };

  const handleInputChange = e => {
    const { value } = e.currentTarget;
    setValue(value);
  };

  const resetForm = () => {
    setValue('');
  };
  return (
    <form className={s.todoForm} onSubmit={addNewTask}>
      <input
        className={s.todoInput}
        type="text"
        onChange={handleInputChange}
        value={value}
        placeholder="Write your task here"
      />
      <button className={s.addButton} type="submit">
        Add
      </button>
    </form>
  );
};

const mapStateToProps = state => ({
  todos: state.todos,
});
const mapDispatchToProps = dispatch => ({
  onSubmit: text => dispatch(todosActions.addTodo(text)),
});

Form.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
