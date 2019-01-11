import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap/lib';

class Joke extends React.PureComponent {
    render() {
        const { type, text, id, onAction } = this.props;
        const buttonText = type === 'main' ? 'Favorite' : 'Remove';
        const buttonType = type === 'main' ? 'info' : 'danger';
        
        return (
            <div>
                <span data-testid="joke-text">{text}</span>
                <div className="joke__item--action">
                    <Button data-testid="joke-action" bsStyle={buttonType} onClick={onAction(id, type)}>{buttonText}</Button>
                </div>
            </div>
        );
    }
}

Joke.propTypes = {
    type: PropTypes.string,
    id: PropTypes.number,
    text: PropTypes.string,
    onAction: PropTypes.func,
};

Joke.defaultProps = {
    type: 'main',
    id: 0,
    text: '',
    onAction: () => {},
};

export default Joke;
