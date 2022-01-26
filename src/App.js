import { useState, useEffect } from 'react';
import shortId from 'shortid';
import { ToastContainer, Zoom, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import TodoList from './components/TodoList/TodoList';
import s from './App.module.scss';
import Form from './components/Form/Form';
import DateRange from './components/DateRange/DateRange';

const App = () => {
  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem('todos')) ?? [],
  );
  const [isTaskAdded, setIsTaskAdded] = useState(false);
  const [isTaskDeleted, setIsTaskDeleted] = useState(false);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    if (isTaskAdded) {
      toast.info('New task added');
    }

    return setIsTaskAdded(false);
  }, [isTaskAdded]);

  useEffect(() => {
    if (isTaskDeleted) {
      toast.info('Task was deleted');
    }
    return setIsTaskDeleted(false);
  }, [isTaskDeleted]);

  const deleteTodo = todoId => {
    setTodos(todos.filter(todo => todo.id !== todoId));
    setIsTaskDeleted(true);
  };

  const addTodo = text => {
    const duplicateTodo = todos.some(todo => todo.text === text);
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
    setTodos(prevTodos => [...prevTodos, newTodo]);
    setIsTaskAdded(true);
  };

  const toggleCompleted = todoId => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === todoId
          ? {
              ...todo,
              completed: !todo.completed,
              skipped: todo.completed,
            }
          : todo,
      ),
    );
  };

  const completedTodoCount = () =>
    todos.reduce((total, { completed }) => (completed ? total + 1 : total), 0);

  const skippedTodoCount = () =>
    todos.reduce((total, { skipped }) => (skipped ? total + 1 : total), 0);
  return (
    <>
      <ToastContainer
        autoClose={3000}
        closeOnClick
        theme="dark"
        transition={Zoom}
      />
      <div className={s.container}>
        <p className={s.text}>All tasks: {todos.length} </p>
        <p className={s.text}>Completed tasks: {completedTodoCount()}</p>
        <p className={s.text}>Skipped tasks: {skippedTodoCount()}</p>

        <div className={s.todoContainer}>
          <DateRange />
          {todos.length === 0 ? (
            <p className={s.text}>Add your first task</p>
          ) : (
            <TodoList
              todos={todos}
              onDeleteTodo={deleteTodo}
              onToggleCompleted={toggleCompleted}
            />
          )}
        </div>
        <Form onSubmit={addTodo} />
      </div>
    </>
  );
};

export default App;
