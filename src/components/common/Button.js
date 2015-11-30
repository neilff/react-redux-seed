import React, { PropTypes } from 'react';

const Button = (props) => {
  const {
    children,
    className,
    onClick,
    style,
    type,
  } = props;

  return (
    <button
      type={ type }
      className={ `btn btn-primary  ${ className }` }
      style={{ ...styles.base, ...style }}
      onClick={ onClick }>
      { children }
    </button>
  );
};

Button.displayName = 'Button';
Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['submit', 'button', 'reset']).isRequired,
  style: PropTypes.object,
};
Button.defaultProps = {
  className: '',
  style: {},
  type: 'button',
  onClick: () => {},
};

const styles = {
  base: {},
};

export default Button;
