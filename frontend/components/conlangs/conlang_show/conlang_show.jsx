import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import LexiconIndexContainer from './lexicon/lexicon_index_container';
import PhonologyContainer from './phonology/phonology_container';

class ConlangShow extends React.Component {
  constructor (props) {
    super(props);
  }

  componentWillMount() {
    this.props.requestSingleConlang(this.props.conlangId);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.location !== newProps.location){
      this.props.requestSingleConlang(newProps.conlangId);
    }
  }

  render() {
    const conlang = this.props.conlang;
    if (!conlang.id) { return null; }

    const description = conlang.description ? conlang.description : "No description";

    return (
      <section className="conlang-show-section main-section">
        <div className="conlang-show-header">
          <h2 className="conlang-title">{conlang.name}</h2>
          <span>Created by <Link to="/"><name>{conlang.author.username}</name></Link></span>
          <br/>
          <br/>
          <p className="conlang-description">{description}</p>
        </div>
        <PhonologyContainer
          conlangId={conlang.id}
          phonology={conlang.phonology}
          />
        <LexiconIndexContainer
          conlangId={conlang.id}
          words={conlang.lexicon}
          authorId={conlang.author.id}
          />
      </section>
    );
  }
}

export default ConlangShow;
