import React from 'react';
import ReactDOM from 'react-dom';
import { Link, hasHistory } from 'react-router';

class AuthForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      username: '',
      password: '',
      formType: "signUp"
    };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.formToggle = this.formToggle.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  formToggle(e) {
    e.preventDefault();
    if (this.state.formType === "signUp"){
      this.setState({formType: "logIn"});
    } else {
        this.setState({formType: "signUp"});
    }
  }

  formToggleButton() {
    return(
      <button id="auth-form-toggle" onClick={this.formToggle}>
        {this.state.formType === "signUp" ? "Log In" : "Sign Up"}
      </button>
    );
  }
}
