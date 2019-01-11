import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap/lib';

function Timer(props) {
  const [text, setText] = useState('Start Timer');

  function toggleText() {
    const newText = text.indexOf('Start') >= 0 ? 'Stop Timer' : 'Start Timer';
    setText(newText);
    if(props.startTimer) {
      props.startTimer();
    }
  }

  return (
    <div className="app__action">
        <Button data-testid="timer-text" bsStyle="primary" onClick={toggleText}>{text}</Button>
    </div> 
  )
}

Timer.propTypes = {
  startTimer: PropTypes.func
};

Timer.defaultProps = {
  startTimer: () => {},
};

export default Timer;
