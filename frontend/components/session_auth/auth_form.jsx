import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class AuthForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      username: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  componentWillMount() {
    this.props.clearErrors();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

  navLink() {
    if (this.props.formType === 'login') {
      return <Link to="/signup">sign up instead</Link>;
    } else {
      return <Link to="/login">log in instead</Link>;
    }
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render () {
    return (
      <div className="auth-form-container">
        <form onSubmit={this.handleSubmit} className="auth-form-box">
          Welcome to Lingwish!
          <br/>
          Please {this.props.formType} or {this.navLink()}
          {this.renderErrors()}
          <div className="login-form">
            <br/>
            <label>Username:
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                placeholder="Username"
                className="auth-input"
                />
            </label>
            <label>password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"
                className="auth-input"
              />
            </label>
            <br/>
            <input type="submit"
              value="Submit"
              className="submit auth-submit"
              />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(AuthForm);
