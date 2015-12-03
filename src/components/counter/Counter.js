import React, { PropTypes } from 'react';

import Button from '../common/Button';

const Counter = ({ counter, increment, decrement }) => {
  return (
    <div className="flex">
      <div className="flex-auto flex-center center">
        <Button
          style={ styles.squareButton }
          className="btn btn-primary bg-black"
          onClick={ decrement }>
          -
        </Button>
      </div>

      <div className="flex-auto flex-center center h1">
        { counter }
      </div>

      <div className="flex-auto flex-center center">
        <Button
          style={ styles.squareButton }
          className="btn btn-primary"
          onClick={ increment }>
          +
        </Button>
      </div>
    </div>
  );
};

Counter.displayName = 'Counter';
Counter.propTypes = {
  counter: PropTypes.func.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
};
Counter.defaultProps = {};

const styles = {
  squareButton: {
    width: 48,
    height: 48,
  },
};

export default Counter;
