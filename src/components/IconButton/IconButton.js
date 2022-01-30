import PropTypes from 'prop-types';

import s from './IconButton.module.scss';

const IconButton = ({ children, onClick }) => (
  <button className={s.button} type="button" onClick={onClick}>
    {children}
  </button>
);

IconButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};
export default IconButton;
