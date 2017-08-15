import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import LexiconIndexContainer from './lexicon/lexicon_index_container';
import PhonologyContainer from './phonology/phonology_container';
import ConlangHeaderShow from './conlang_header_show';

class ConlangShow extends React.Component {
  constructor (props) {
    super(props);
    this.state = props.conlang;

  }

  componentWillMount() {
    this.props.requestSingleConlang(this.props.conlangId);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.location !== newProps.location){
      this.props.requestSingleConlang(newProps.conlangId);
    }
    if (newProps.conlang) {
      this.setState(newProps.conlang);
    }
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const conlang = this.state;
  }

  render() {
    const conlang = this.state;
    if (!conlang.id) { return null; }
    console.log(this.props.conlangAuthor);
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
