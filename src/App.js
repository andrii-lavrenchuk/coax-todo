import { ToastContainer, Zoom } from 'react-toastify';

import TodoList from './components/TodoList';
import Form from './components/Form';
import CountTasks from './components/CountTasks';
import DateRange from './components/DateRange';
import Container from './components/Container';
import TodoContainer from './components/TodoContainer';

import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <ToastContainer
        autoClose={3000}
        closeOnClick
        theme="dark"
        transition={Zoom}
      />
      <Container>
        <CountTasks />
        <TodoContainer>
          <DateRange />

          <TodoList />
        </TodoContainer>
        <Form />
      </Container>
    </>
  );
};

export default App;
