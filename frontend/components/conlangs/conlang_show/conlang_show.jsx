import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import LexiconIndexContainer from './lexicon/lexicon_index_container';
import PhonologyContainer from './phonology/phonology_container';
import { requestChartableConsonants } from '../../../actions/consonant_actions';

class ConlangShow extends React.Component {
  constructor (props) {
    super(props);
  }

  componentWillMount() {
    this.props.requestSingleConlang(this.props.conlangId);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.conlangId !== newProps.conlangId){
      this.props.requestSingleConlang(newProps.conlangId);
    }
  }

  render() {
    let conlang = this.props.conlang;
    if (!conlang.id) { return null; }
    return (
      <section className="conlang-show">
        <div className="conlang-show-header">
          <h2 className="conlang-title">{conlang.name}</h2>
          <span>Created by <Link to="/"><name>{conlang.author.username}</name></Link></span>
          <p className="conlang-description">{conlang.description}</p>
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
