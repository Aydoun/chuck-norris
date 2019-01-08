import React from 'react';
import authService from '../../utils/auth';

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
       const { from } = this.props.location.state || { from: { pathname: '/app' } };
       const { redirectToReferrer } = this.state;
       if (redirectToReferrer === true) {
          this.props.history.push(from.pathname);
       }
        return (
          <div>
             <p>Please, you need to be authenticated to to view this content</p>
             <button onClick={this.login}>Log in</button>
          </div>
       )
    }
 }