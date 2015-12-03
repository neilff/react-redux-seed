import React, { PropTypes } from 'react';

const FormLabel = ({ children, className, style }) => {
  return (
    <label className={ className } style={{ ...styles.base, ...style }}>
      { children }
    </label>
  );
};

FormLabel.displayName = 'FormLabel';
FormLabel.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
};
FormLabel.defaultProps = {
  className: '',
  style: {},
};

const styles = {
  base: {},
};

export default FormLabel;
