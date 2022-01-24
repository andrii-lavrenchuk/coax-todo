import { Component } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import s from './Form.module.scss';

export default class Form extends Component {
  state = {
    value: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    const { value } = this.state;
    const { onSubmit } = this.props;
    if (value.trim() === '') {
      toast.warn('Please, fill the field');
      return;
    }
    if (value.length > 38) {
      toast.error('Too much words!');
      return;
    }

    onSubmit(value.trim());
    this.resetForm();
  };

  hendleInputChange = e => {
    const { value } = e.currentTarget;
    this.setState({ value });
  };

  resetForm = () => {
    this.setState({ value: '' });
  };

  render() {
    const { value } = this.state;

    return (
      <form className={s.todoForm} onSubmit={this.handleSubmit}>
        <input
          className={s.todoInput}
          type="text"
          onChange={this.hendleInputChange}
          value={value}
          placeholder="Write your task here"
        />
        <button className={s.addButton} type="submit">
          Add
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func,
};
