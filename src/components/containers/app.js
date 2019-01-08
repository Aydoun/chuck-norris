
import React from 'react';
import { BrowserRouter as Router, Route, withRouter, Link } from 'react-router-dom';
import Header from './header';
import Jokes from './jokes';
import ProtectedRoute from '../../routes/protected';
import Login from './login';

class appContainer extends React.Component {
    componentDidMount() {
        console.log('Mounted', this.props);
    }

    render() {
       return (
        <Router>
            <div>
                <Header />
                <ul>
                    <li><Link to="/app">Public Content</Link></li>
                    <li><Link to="/">Protected Content</Link></li>
                </ul>
                <Route path="/login" component={withRouter(Login)}/>
                <ProtectedRoute path='/app' component={Jokes} />     
            </div>
        </Router>
      );
    }
 }
 export default appContainer;
