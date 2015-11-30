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
  className: PropTypes.string,
  style: PropTypes.object,
};
Content.defaultProps = {
  className: '',
  style: {},
};

const styles = {
  base: {},
};

export default Content;
