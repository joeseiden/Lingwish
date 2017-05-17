import React from 'react';
import ReactDOM from 'react-dom';
import { Link, hashHistory } from 'react-router';

class HomePage extends React.Component {
  constructor(props){
    super(props);
  }

  render () {
    return(
      <div>
        Hi! I'm the home page!
      </div>
    );
  }
}

export default HomePage;
