import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap/lib';

function Timer(props) {
  const [text, setText] = useState('Start Timer');

  function toggleText() {
    const newText = text.indexOf('Start') >= 0 ? 'Stop Timer' : 'Start Timer';
    setText(newText);
    if(props.onAction) {
      props.onAction();
    }
  }

  return (
    <div className="app__timer">
        <Button data-testid="timer-text" bsStyle="primary" onClick={toggleText}>{text}</Button>
    </div> 
  )
}

Timer.propTypes = {
  onAction: PropTypes.func
};

Timer.defaultProps = {
  onAction: () => {},
};

export default Timer;
