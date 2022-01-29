import { useState, useEffect, useContext } from 'react';
import { toast } from 'react-toastify';

import { TodosContext } from '../../context/context';
import s from './Form.module.scss';

const Form = () => {
  const [value, setValue] = useState('');
  const [isTodoAdded, setIsTodoAdded] = useState(false);

  useEffect(() => {
    if (isTodoAdded) {
      toast.info('New todo was added');
    }
    return setIsTodoAdded(false);
  }, [isTodoAdded]);

  const {
    todos: { todos },
    addTodo,
  } = useContext(TodosContext);

  const addNewTask = e => {
    e.preventDefault();

    const duplicateTodo = todos.some(todo => todo.text === value);

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

    addTodo(value);
    setIsTodoAdded(true);
    resetForm();
  };

  const hendleInputChange = e => {
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
        onChange={hendleInputChange}
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
