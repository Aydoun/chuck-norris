import React from 'react';
import { Redirect } from 'react-router-dom';
import { Button } from 'react-bootstrap/lib';
import { isLoggedIn, saveToStorage } from '../../utils';

export default class Login extends React.Component {
    constructor(props) {
       super(props);
       this.login = this.login.bind(this);
       this.onSubmit = this.onSubmit.bind(this);
       this.state = {
          redirectToReferrer: false
       };
    }

    onSubmit(e) {
      e.preventDefault();
      const { history } = this.props;
    
      // if (!(username === 'george' && password === 'foreman')) {
      //   return this.setState({ error: true });
      // }
      saveToStorage('LoggedIn', true);
      history.push('/');
    }

    login() {
      
    }

    render() {
       const { history } = this.props;

       if (isLoggedIn()) {
         return <Redirect to="/" />;
       }
       
       return (
          <Button bsStyle="primary" onClick={this.onSubmit}>Login</Button>
       )
    }
 }