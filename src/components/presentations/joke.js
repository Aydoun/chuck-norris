import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap/lib';

class Joke extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        const { type, id, onAction } = this.props;
        onAction(id, type);
    }

    render() {
        const { type, text } = this.props;

        const buttonText = type === 'main' ? 'Favorite' : 'Remove';
        const buttonType = type === 'main' ? 'info' : 'danger';
        return (
            <div>
                <span>{text}</span>
                <div className="joke__item--action">
                    <Button bsStyle={buttonType} onClick={this.onClick}>{buttonText}</Button>
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
