import PropTypes from 'prop-types';

const ButtonCustom = ({ color, position, children, onClick}) => {
  return (
    <button className={`btn-custom ${color} ${position}`} onClick={onClick}>
      {children}
    </button>
  );
};

ButtonCustom.propTypes = {
  color: PropTypes.isRequired, 
  position: PropTypes.oneOf(['left', 'center', 'right']).isRequired, 
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

export default ButtonCustom;
