import React from 'react';
import PropTypes from 'prop-types';
import { Panel, ListGroup, ListGroupItem } from 'react-bootstrap/lib';
import Joke from '../presentations/joke';

class JokesList extends React.Component {
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
                                    <Joke text={c.joke} type={type} id={c.id} onAction={onAction} />
                                </ListGroupItem>
                            )
                        })
                    }
                </ListGroup>
            </Panel>
        );
    }
}

JokesList.propTypes = {
    header: PropTypes.string,
    type: PropTypes.string,
    content: PropTypes.array,
    onAction: PropTypes.func
};

JokesList.defaultProps = {
    header: '<header>',
    type: 'main',
    content: [],
    onAction: () => {},
};

export default JokesList;
