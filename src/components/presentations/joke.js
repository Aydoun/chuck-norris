import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap/lib';

class Joke extends React.Component {
    render() {
        const { type, text, onAction } = this.props;

        const buttonText = type === 'main' ? 'Favorite' : 'Remove';
        const buttonType = type === 'main' ? 'info' : 'danger';
        return (
            <div>
                <span>{text}</span>
                <div className="joke__item--action">
                    <Button bsStyle={buttonType} onClick={onAction}>{buttonText}</Button>
                </div>
            </div>
        );
    }
}

Joke.propTypes = {
    type: PropTypes.string,
    text: PropTypes.string,
    onAction: PropTypes.func,
};

Joke.defaultProps = {
    type: 'main',
    text: '',
    onAction: () => {},
};

export default Joke;
