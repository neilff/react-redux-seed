import React, { PropTypes } from 'react';

const Container = ({ children, style, className }) => {
  return (
    <div className={ `container ${ className }` } style={{ ...styles.base, ...style }}>
      <div className="clearfix">
        { children }
      </div>
    </div>
  );
};

Container.displayName = 'Container';
Container.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
};
Container.defaultProps = {
  className: '',
  style: {},
};

const styles = {
  base: {},
};

export default Container;
