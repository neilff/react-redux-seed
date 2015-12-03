import React, { PropTypes } from 'react';

const Form = ({ children, style, className, handleSubmit }) => {
  return (
    <form
      style={{ ...styles.base, ...style }}
      onSubmit={(e) => {
        e.preventDefault();
        document.activeElement.blur();
        handleSubmit();
      }}>
      { children }
    </form>
  );
};

Form.displayName = 'Form';
Form.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  style: PropTypes.object,
};
Form.defaultProps = {
  className: '',
  style: {},
};

const styles = {
  base: {},
};

export default Form;
