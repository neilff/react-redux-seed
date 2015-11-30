import React, { PropTypes } from 'react';

const Column = ({ children, className, style }) => {
  return (
    <div className={ `col ${ className }` } style={{ ...styles.base, ...style }}>
      { children }
    </div>
  );
};

Column.displayName = 'Column';
Column.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
};
Column.defaultProps = {
  className: '',
  style: {},
};

const styles = {
  base: {},
};

export default Column;
