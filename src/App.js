import { Component } from 'react';
import shortId from 'shortid';
import { ToastContainer, Zoom, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import TodoList from './components/TodoList/TodoList';
import s from './App.module.scss';
import Form from './components/Form/Form';
import DateRange from './components/DateRange/DateRange';

class App extends Component {
  state = {
    todos: [],
  };

  componentDidMount() {
    const todos = JSON.parse(localStorage.getItem('todos'));
    if (todos) {
      this.setState({ todos });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { todos } = this.state;
    if (this.state.todos !== prevState.todos) {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  addTodo = text => {
    const duplicateTodo = this.state.todos.some(todo => todo.text === text);
    if (duplicateTodo) {
      toast.error(`Todo with text '${text}' is already exist!`);
      return;
    }

    const newTodo = {
      id: shortId.generate(),
      text,
      completed: false,
      skipped: false,
    };
    this.setState(({ todos }) => ({
      todos: [...todos, newTodo],
    }));
  };

  toggleCompleted = todoId => {
    this.setState(({ todos }) => ({
      todos: todos.map(todo =>
        todo.id === todoId
          ? {
              ...todo,
              completed: !todo.completed,
              skipped: todo.completed,
            }
          : todo,
      ),
    }));
  };

  completedTodoCount = () => {
    const { todos } = this.state;
    return todos.reduce(
      (total, { completed }) => (completed ? total + 1 : total),
      0,
    );
  };

  skippedTodoCount = () => {
    const { todos } = this.state;
    return todos.reduce(
      (total, { skipped }) => (skipped ? total + 1 : total),
      0,
    );
  };

  render() {
    const { todos } = this.state;
    const completedTodosCount = this.completedTodoCount();
    const skippedTodosCount = this.skippedTodoCount();

    return (
      <>
        <ToastContainer
          autoClose={3000}
          closeOnClick
          theme="dark"
          transition={Zoom}
        />
        <div className={s.container}>
          <p className={s.text}>All todos: {todos.length} </p>
          <p className={s.text}>Completed todo: {completedTodosCount}</p>
          <p className={s.text}>Skipped todo: {skippedTodosCount}</p>

          <div className={s.todoContainer}>
            <DateRange />
            {todos.length === 0 ? (
              <p className={s.text}>Add your first todo</p>
            ) : (
              <TodoList
                todos={todos}
                onDeleteTodo={this.deleteTodo}
                onToggleCompleted={this.toggleCompleted}
              />
            )}
          </div>
          <Form onSubmit={this.addTodo} />
        </div>
      </>
    );
  }
}

export default App;
