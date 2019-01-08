
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './header';
import Jokes from './jokes';
import ProtectedRoute from '../../routes/protected';
import Login from './login';

class appContainer extends React.Component {
    render() {
       return (
        <Router>
            <div>
                <Header />
                <Switch>
                    <Route path="/login" component={Login}/>
                    <ProtectedRoute path='/' component={Jokes} />     
                </Switch>
            </div>
        </Router>
      );
    }
 }
 export default appContainer;
