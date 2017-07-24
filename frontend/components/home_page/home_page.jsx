import React from 'react';
import ReactDOM from 'react-dom';
import { Link, withRouter } from 'react-router-dom';

class HomePage extends React.Component {
  constructor(props){
    super(props);

    this._goToIndex = this._goToIndex.bind(this);
  }

  _goToIndex (e) {
    e.preventDefault();
    this.props.history.push('conlangs');
  }

  render () {
    return(
      <div>
        Hi! I'm the home page!
        <Link to="/conlangs">Conlangs</Link>
        <Link to="/login">Login</Link>
      </div>
    );
  }
}

export default HomePage;
