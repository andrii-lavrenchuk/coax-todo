import PropTypes from 'prop-types';

import s from './TodoContainer.module.scss';

const TodoContainer = ({ children }) => (
  <div className={s.todoContainer}>{children}</div>
);
TodoContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TodoContainer;
