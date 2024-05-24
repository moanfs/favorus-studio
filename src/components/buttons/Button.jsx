import PropTypes from 'prop-types';

const Button = ({ color, position, children, onClick }) => {
  const colorClass = `btn-${color}`;
  const positionClass = position === 'center' ? 'd-block mx-auto' : `float-${position}`;

  return (
    <button className={`btn ${colorClass} ${positionClass}`} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  color: PropTypes.isRequired, 
  position: PropTypes.oneOf(['left', 'center', 'right']).isRequired, 
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

export default Button;
