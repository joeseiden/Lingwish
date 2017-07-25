import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

class ConlangIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      abbreviated: true
    };

    this.toggleAbbreviation = this.toggleAbbreviation.bind(this);
  }

  toggleAbbreviation() {
    this.setState({abbreviated: !this.state.abbreviated});
  }


  render() {
    const conlang = this.props.conlang;
    let descriptionClasses = classNames({
      "conlang-description": true,
      "abbreviated": this.state.abbreviated
    });
    return (
      <li className="conlang-index-item">
        <div className="conlang-title">
          <Link to={`/conlangs/${conlang.id}`}>
            {conlang.name}
          </Link>
          <span> by&nbsp;
            <Link to="/">
              <name>
                {conlang.author.username}
              </name>
            </Link>
          </span>
        </div>
        <p className={descriptionClasses} onClick={this.toggleAbbreviation}>
          {conlang.description}
        </p>
      </li>
    );
  }
}

export default ConlangIndexItem;
