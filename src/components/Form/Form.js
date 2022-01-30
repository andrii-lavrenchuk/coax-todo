import { useState, useContext } from 'react';
import { toast } from 'react-toastify';

import { TodosContext } from '../../context/context';
import s from './Form.module.scss';

const Form = () => {
  const [value, setValue] = useState('');

  const {
    todos: { todos },
    addTodo,
  } = useContext(TodosContext);

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

    addTodo(value.toLowerCase());
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

export default Form;
