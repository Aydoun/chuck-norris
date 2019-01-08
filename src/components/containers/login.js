import React from 'react';
import { isLoggedIn } from '../../utils';

export default class Login extends React.Component {
    constructor(props) {
       super(props);
       this.login = this.login.bind(this);
       this.state = {
          redirectToReferrer: false
       };
    }

    login() {
      authService.authenticate(() => {
          this.setState(() => ({
             redirectToReferrer: true
          }));
       });
    }

    render() {
       console.log(isLoggedIn(), 'isLoggedIn');
       return (
          <p>I'm Login</p>
       )
    }
 }