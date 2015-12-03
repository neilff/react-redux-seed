import React, { PropTypes } from 'react';

const Content = ({ children, isVisible }) => {
  const visibleClass = isVisible ? 'block' : 'hide';

  return (
    <div
      className={ `mt3 p1 ${ visibleClass }` }
      style={{ ...styles.base, styles }}>
      { children }
    </div>
  );
};

Content.displayName = 'Content';
Content.propTypes = {
  children: PropTypes.node,
  isVisible: PropTypes.bool.isRequired,
};
Content.defaultProps = {};

const styles = {
  base: {},
};

export default Content;
