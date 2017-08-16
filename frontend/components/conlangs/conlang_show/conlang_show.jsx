import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import LexiconIndexContainer from './lexicon/lexicon_index_container';
import PhonologyContainer from './phonology/phonology_container';
import ConlangHeaderShow from './conlang_header_show';
import ConlangHeaderEdit from './conlang_header_edit';
import update from 'immutability-helper';

class ConlangShow extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      conlang: props.conlang,
      editing: false
    }

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleEditing = this.toggleEditing.bind(this);
  }

  componentWillMount() {
    this.props.requestSingleConlang(this.props.conlangId);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.location !== newProps.location){
      this.props.requestSingleConlang(newProps.conlangId);
    }
    if (newProps.conlang) {
      this.setState({conlang: newProps.conlang});
    }
  }

  update(field) {
    return (e) => {
      const newConlang = update(this.state.conlang, {[field]: {$set: e.target.value}});
      this.setState({conlang: newConlang})
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const conlang = this.state.conlang;
    if (this.props.conlangAuthor) {
      this.props.updateConlang(this.props.currentUserId, conlang);
      this.toggleEditing();
    }
  }

  toggleEditing() {
    this.setState({editing: !this.state.editing});
  }

  render() {
    const conlang = this.state.conlang;
    if (!conlang.id) { return null; }
    const description = conlang.description ? conlang.description : "No description";
    const _renderHeader = () => {
      if (this.state.editing) {
        return (
          <ConlangHeaderEdit conlang={conlang} update={this.update} handleSubmit={this.handleSubmit} toggleEditing={this.toggleEditing}/>)
      } else {
        return (
          <ConlangHeaderShow conlang={conlang} toggleEditing={this.toggleEditing} conlangAuthor={this.props.conlangAuthor}/>
        )
      }
    }
    return (
      <section className="conlang-show-section main-section">
        {_renderHeader()}
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
