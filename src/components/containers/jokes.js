import React from 'react';
import PropTypes from 'prop-types';
import { Panel, ListGroup, ListGroupItem } from 'react-bootstrap/lib';
import Joke from '../presentations/joke';

class Jokes extends React.Component {
    render() {
        const { header, content, type, onAction } = this.props;
        
        return (
            <Panel>
                <Panel.Heading>{header}</Panel.Heading>
                {content.length === 0 && <Panel.Body>The List is Empty</Panel.Body>}
                <ListGroup>
                    {
                        content.map(c => {
                            return (
                                <ListGroupItem className="jokes__item" key={c.id}>
                                    <Joke text={c.joke} type={type} onAction={() => onAction(c.id, type)} />
                                </ListGroupItem>
                            )
                        })
                    }
                </ListGroup>
            </Panel>
        );
    }
}

Jokes.propTypes = {
    header: PropTypes.string,
    type: PropTypes.string,
    content: PropTypes.array,
    onAction: PropTypes.func
};

Jokes.defaultProps = {
    header: '<header>',
    type: 'main',
    content: [],
    onAction: () => {},
};

export default Jokes;
