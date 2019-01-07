import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap/lib';

export default class Header extends React.PureComponent {
  render() {
    const { onAction, buttonText } = this.props;

    return (
      <div className="header">
        <Button bsStyle="primary" onClick={onAction}>{buttonText}</Button>
      </div>
    );
  }
}

Header.propTypes = {
  buttonText: PropTypes.string,
  onAction: PropTypes.func
};

Header.defaultProps = {
  buttonText: 'Start Timer',
  onAction: () => {},
};
