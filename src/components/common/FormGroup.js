import React, { PropTypes } from 'react';

const FormGroup = ({ children, style, className }) => {
  return (
    <div className={ `p2 ${ className }` } style={{ ...styles.base, ...style }}>
      { children }
    </div>
  );
};

FormGroup.displayName = 'FormGroup';
FormGroup.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
};
FormGroup.defaultProps = {
  className: '',
  style: {},
};

const styles = {
  base: {},
};

export default FormGroup;
