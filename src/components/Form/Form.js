import { useState } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import s from './Form.module.scss';

const Form = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (value.trim() === '') {
      toast.warn('Please, fill the field');
      return;
    }
    if (value.length > 38) {
      toast.error('Too much words!');
      return;
    }
    onSubmit(value.trim().toLowerCase());
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
    <form className={s.todoForm} onSubmit={handleSubmit}>
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

Form.propTypes = {
  onSubmit: PropTypes.func,
};

export default Form;
