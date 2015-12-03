import React, { PropTypes } from 'react';

const ModalContent = ({ children, style, className }) => {
  return (
    <div
      className={ `${ className } p1 z4 bg-white` }
      style={{ ...styles.base, ...style }}>
      { children }
    </div>
  );
};

ModalContent.displayName = 'ModalContent';
ModalContent.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
};
ModalContent.defaultProps = {
  className: '',
  style: {},
};

const styles = {
  base: {
    width: '25%',
    margin: '4rem auto',
  },
};

export default ModalContent;
