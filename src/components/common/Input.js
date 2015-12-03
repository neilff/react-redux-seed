import React, { PropTypes } from 'react';

const Input = ({ type, style, className, placeholder, fieldDefinition }) => {
  return (
    <input
      className={ `block col-12 mb1 field ${ className }` }
      style={{ ...styles.base, ...style }}
      type={ type }
      placeholder={ placeholder }
      { ...fieldDefinition } />
  );
};

Input.displayName = 'Input';
Input.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  style: PropTypes.object,
  type: PropTypes.string,
  fieldDefinition: PropTypes.object.isRequired,
};
Input.defaultProps = {
  className: '',
  placeholder: '',
  style: {},
  type: 'text',
};

const styles = {
  base: {},
};

export default Input;
