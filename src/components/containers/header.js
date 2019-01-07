import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap/lib';

export default function Header(props) {
  const [text, setText] = useState('Start Timer');

  function toggleText() {
    const newText = text.indexOf('Start') >= 0 ? 'Stop Timer' : 'Start Timer';
    setText(newText);
    if(props.onAction) {
      props.onAction();
    }
  }

  return (
    <div className="header">
        <div className="header__timer">
          <Button data-testid="timer-text" bsStyle="primary" onClick={toggleText}>{text}</Button>
        </div> 
    </div>
  )
}

Header.propTypes = {
  onAction: PropTypes.func
};

Header.defaultProps = {
  onAction: () => {},
};
