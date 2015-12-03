import React, { PropTypes } from 'react';

import LogoImage from '../../assets/rangleio-logo.svg';

const Logo = ({ style, className }) => {
  return (
    <img
      className={ className }
      style={{ ...styles.base, ...style }}
      src={ LogoImage }
      alt="Rangle.io" />
  );
};

Logo.displayName = 'Logo';
Logo.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
};
Logo.defaultProps = {
  className: '',
  style: {},
};

const styles = {
  base: {
    width: 128,
  },
};

export default Logo;
