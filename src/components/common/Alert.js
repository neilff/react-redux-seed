import React, { PropTypes } from 'react';
import { Map } from 'immutable';

const componentColor = Map({
  info: 'bg-blue white',
  warning: 'bg-yellow black',
  success: 'bg-green black',
  error: 'bg-red white',
});

const Alert = ({ children, isVisible, status, className, style }) => {
  const visibleClass = isVisible ? 'block' : 'hide';

  return (
    <div
      className={ `${ className } p2 bold ${ visibleClass } ${ componentColor.get(status) }` }
      style={{
        ...styles.base,
        ...style,
      }}>
      { children }
    </div>
  );
};

Alert.displayName = 'Alert';
Alert.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  isVisible: PropTypes.bool.isRequired,
  status: PropTypes.oneOf(componentColor.keySeq().toJS()).isRequired,
  style: PropTypes.object,
};
Alert.defaultProps = {
  className: '',
  style: {},
  status: 'info',
};

const styles = {
  base: {},
};

export default Alert;
