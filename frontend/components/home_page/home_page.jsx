import React from 'react';
import ReactDOM from 'react-dom';
import { Link, withRouter } from 'react-router-dom';

class HomePage extends React.Component {
  constructor(props){
    super(props);
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
