import React, { PropTypes } from 'react';

const FormError = ({ children, isVisible, style, className}) => {
  const visibleClass = isVisible ? 'block' : 'hide';

  return (
    <div
      className={ `${ className } bold ${ visibleClass } black` }
      style={{ ...styles.base, ...style }}>
      { children }
    </div>
  );
};

FormError.displayName = 'FormError';
FormError.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  isVisible: PropTypes.bool.isRequired,
  style: PropTypes.object,
};
FormError.defaultProps = {
  className: '',
  style: {},
};

const styles = {
  base: {},
};

export default FormError;
