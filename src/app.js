import React from 'react';
import Alert from 'react-bootstrap/lib/Alert';
import { requestJokesList } from './api';

export default class App extends React.Component {
    componentDidMount() {
        requestJokesList(10)
        .then(data => {
            // console.log(data, 'data');
        })
        .catch(err => {
            console.log(err.message, 'message');
        });
    }

    render() {
        return (
            <Alert bsStyle="warning">
                <strong>Holy guacamole!</strong> Best check yo self, lalaland
            </Alert>
        );
    }
}
