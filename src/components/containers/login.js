import React from 'react';
import { Redirect } from 'react-router-dom';
import { Button, Form, Col, FormControl, FormGroup, ControlLabel } from 'react-bootstrap/lib';
import { isLoggedIn, saveToStorage, validatePassword } from '../../utils';

export default class Login extends React.Component {
    constructor(props) {
       super(props);
       this.onSubmit = this.onSubmit.bind(this);
       this.handleChange = this.handleChange.bind(this);
       this.state = {
         username: '',
         password: '',
         error: '',
       };
    }

    onSubmit(e) {
      e.preventDefault();
      const { username, password } = this.state;
      const { history } = this.props;
      const isPasswordValid = validatePassword(password);

      if (isPasswordValid === true) {
         if (username.length > 0) {
            saveToStorage('LoggedIn', true);
            history.push('/');
         } else {
            this.setState({ error: 'Please input your userame' });
         }
      } else {
         this.setState({ error: isPasswordValid });
      }
    }

    handleChange(name) {
       return (e) => {
          this.setState({ [name]: e.target.value });
       };
    } 

    render() {
       const { name, password, error } = this.state;
       
       return (
          <div className="login__form">
            <h1>Login</h1>
            <Form horizontal>
               <FormGroup controlId="formHorizontalUsername" >
                  <Col componentClass={ControlLabel} sm={2} >
                     Username
                  </Col>
                  <Col sm={10}>
                     <FormControl 
                        aria-label="username-input" 
                        value={name} 
                        type="text" 
                        placeholder="Username" 
                        onChange={this.handleChange("username")} 
                     />
                  </Col>
               </FormGroup>
               <FormGroup controlId="formHorizontalPassword" >
                  <Col componentClass={ControlLabel} sm={2}>
                     Password
                  </Col>
                  <Col sm={10}>
                     <FormControl 
                        aria-label="password-input" 
                        type="text" 
                        value={password}
                        placeholder="Password" 
                        onChange={this.handleChange("password")} 
                     />
                  </Col>
               </FormGroup>
               <div className="login__error">
                  <span>{error}</span>
               </div>
               <FormGroup>
                  <Col smOffset={2} sm={10}>
                     <Button bsStyle="primary" type="submit" onClick={this.onSubmit}>Sign in</Button>
                  </Col>
               </FormGroup>
            </Form>
          </div>
       );
    }
 }